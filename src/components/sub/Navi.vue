<template>
    <div class="header">
        <mu-appbar title="FCC Polling App">
            <mu-flat-button color="white" label="Home" slot="right" @click="goTo('/')" class="desktop-only" />
            <mu-flat-button v-if="!isSignedIn" color="white" label="Sign in with Google" slot="right" @click="authenticate('google')" class="desktop-only" />
            <mu-flat-button v-if="isSignedIn" color="white" label="My Poll" slot="right" @click="goTo('/MyPoll')" class="desktop-only" />
            <mu-flat-button v-if="isSignedIn" color="white" label="New Poll" slot="right" @click="goTo('/NewPoll')" class="desktop-only" />
            <mu-flat-button v-if="isSignedIn" color="white" label="Logout" icon="exit_to_app" slot="right" @click="logout" class="desktop-only" />
    
            <mu-icon-menu icon="more_vert" slot="right" class="mobile-only">
                <mu-menu-item title="Home" @click="goTo('/')" />
                <mu-menu-item v-if="!isSignedIn" title="Sign in with Google" @click="authenticate('google')" />
                <mu-menu-item v-if="isSignedIn" title="My Poll" @click="goTo('/MyPoll')" />
                <mu-menu-item v-if="isSignedIn" title="New Poll" @click="goTo('/NewPoll')" />
                <mu-menu-item v-if="isSignedIn" title="Logout" icon="exit_to_app" @click="logout" />
            </mu-icon-menu>
        </mu-appbar>
    </div>
</template>
<script>
import { mapState, mapMutations, mapActions } from 'vuex'
export default {
    data() {
        return {
        }
    },
    computed: {
        ...mapState(['user']),
        isSignedIn() {
            return !!this.user.email && !!this.user.serverToken;
        }
    },
    methods: {
        ...mapMutations(['updateSocialToken', 'updateServerToken', 'updateUserInfo']),
        ...mapActions(['logout', 'openThenClosePopup']),
        goTo(path) {
            this.$router.push(path);
        },
        async authenticate(network) {
            const hello = this.hello;
            try {
                await hello(network).login({ scope: 'email' });
                const authRes = hello(network).getAuthResponse();
                const profile = await hello(network).api('me', {
                    scope: 'email',
                    force: true
                });

                // update token and user info into vuex
                const accessToken = authRes.access_token;
                this.updateSocialToken(accessToken);
                const userInfo = {
                    socialId: profile.id,
                    email: profile.email,
                    name: profile.displayName,
                    network
                }
                this.updateUserInfo(userInfo);

                // get server token and update into vuex
                const res = await this.axios.post('/auth', {
                    network,
                    socialToken: accessToken
                });
                if (res.status == 200) {
                    const serverToken = res.data.token;
                    this.updateServerToken(serverToken);

                    const userId = res.data.data._id;
                    this.updateUserInfo({ userId });
                }
                this.openThenClosePopup({ position: 'top', msg: `Successfully logged in as ${this.user.name}` });
            } catch (err) {
                this.pino.error(err);
            }
        }
    },
    components: {
    }
}
</script>
<style  lang=scss>
@import "node_modules/bourbon/app/assets/stylesheets/_bourbon.scss";
@import "node_modules/bourbon-neat/app/assets/stylesheets/_neat.scss";
.desktop-only {
    @include media(max-width 767px) {
        display: none;
    }
}

.mobile-only {
    @include media(768px) {
        display: none;
    }
}
</style>