export default {
  state : {
    show: false
  },
  mutations : {
    showLoadingOverlay(state) {
      state.show = true;
    },
    hideLoadingOverlay(state) {
      state.show = false;
    }
  }
};
