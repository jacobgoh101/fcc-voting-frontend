<template>
    <div class="header">
        <mu-appbar title="FCC Polling App">
            <mu-flat-button color="white" label="Home" slot="right" @click="goTo('/')" />
            <Signin slot="right" v-if="!isSignedIn" />
            <mu-flat-button v-if="isSignedIn" color="white" label="My Poll" slot="right" @click="goTo('/')" />
            <mu-flat-button v-if="isSignedIn" color="white" label="New Poll" slot="right" @click="goTo('/NewPoll')" />
            <mu-flat-button v-if="isSignedIn" color="white" label="Logout" icon="exit_to_app" slot="right" @click="logout" />
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

</style>