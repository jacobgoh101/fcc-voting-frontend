<template>
  <div v-if="loadingOverlay.show">
    <mu-circular-progress :size="60" />
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'
export default {
  data() {
    return {

    }
  },
  computed: {
    ...mapState(['loadingOverlay'])
  }
}
</script>

<style scoped lang=scss>
div {
  position: fixed;
  width: 100%;
  width: 100vw;
  height: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  background: transparentize(#fff, 0.2);
  z-index: 100;
  .mu-circular-progress {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
}
</style>
