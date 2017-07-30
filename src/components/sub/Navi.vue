<template>
    <div class="header">
        <mu-appbar title="Title">
            <mu-flat-button color="white" label="Home" slot="right" @click="goTo('/home')" />
            <Signin slot="right" v-if="!isSignedIn" />
        </mu-appbar>
    </div>
</template>
<script>
import { mapState } from 'vuex'
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
        }
    },
    components: {
        Signin
    }
}
</script>
<style scoped lang=scss>

</style>