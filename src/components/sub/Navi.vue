<template>
    <div class="header">
        <mu-appbar title="FCC Polling App">
            <mu-flat-button color="white" label="Home" slot="right" @click="goTo('/')" class="desktop-only" />
            <Signin slot="right" v-if="!isSignedIn" class="" />
            <mu-flat-button v-if="isSignedIn" color="white" label="My Poll" slot="right" @click="goTo('/MyPoll')" class="desktop-only" />
            <mu-flat-button v-if="isSignedIn" color="white" label="New Poll" slot="right" @click="goTo('/NewPoll')" class="desktop-only" />
            <mu-flat-button v-if="isSignedIn" color="white" label="Logout" icon="exit_to_app" slot="right" @click="logout" class="desktop-only" />
    
            <mu-icon-menu icon="more_vert" slot="right" class="mobile-only">
                <mu-menu-item title="Home" @click="goTo('/')" />
                <mu-menu-item v-if="isSignedIn" title="My Poll" @click="goTo('/MyPoll')" />
                <mu-menu-item v-if="isSignedIn" title="New Poll" @click="goTo('/NewPoll')" />
                <mu-menu-item v-if="isSignedIn" title="Logout" icon="exit_to_app" @click="logout" />
            </mu-icon-menu>
        </mu-appbar>
    </div>
</template>
<script>
import { mapState, mapMutations } from 'vuex'
import Signin from './Signin';
export default {
    data() {
        return {

        }
    },
    computed: {
        ...mapState(['user']),
        isSignedIn() {
            return !!this.user.email;
        }
    },
    methods: {
        goTo(path) {
            this.$router.push(path);
        },
        ...mapMutations(['logout'])
    },
    components: {
        Signin
    }
}
</script>
<style scoped lang=scss>
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