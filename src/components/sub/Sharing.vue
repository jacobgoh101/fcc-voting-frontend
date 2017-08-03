<template>
    <social-sharing inline-template>
        <button class="btn btn-default">
            <network network="facebook">
                Share to Facebook
            </network>
        </button>
    </social-sharing>
</template>

<script>
export default {
    data() {
        return {
        }
    },
    computed: {
    }
}
</script>

<style lang="scss" scoped>
.btn.btn-default {
    margin-top: 80px;
}
</style>