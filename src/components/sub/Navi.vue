<template>
    <div class="header">
        <mu-appbar title="Title">
            <mu-flat-button color="white" label="Home" slot="right" @click="goTo('/home')" />
            <Signin slot="right" />
        </mu-appbar>
    </div>
</template>
<script>
import Signin from './Signin';
export default {
    data() {
        return {

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