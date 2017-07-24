export default {
  state: {
    socialToken: "",
    serverToken: ""
  },
  mutations: {
    updateSocialToken(state, token) {
      state.socialToken = token;
    },
    updateServerToken(state, token) {
      state.serverToken = token;
    }
  }
};
