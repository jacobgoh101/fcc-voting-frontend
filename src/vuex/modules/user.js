export default {
  state : {
    socialToken: "",
    serverToken: "",
    email: "",
    name: "",
    network: "",
    socialId: ""
  },
  mutations : {
    updateSocialToken(state, token) {
      state.socialToken = token;
    },
    updateServerToken(state, token) {
      state.serverToken = token;
    },
    updateUserInfo(state, info) {
      state.email = info.email;
      state.name = info.name;
      state.network = info.network;
      state.socialId = info.socialId;
    }
  }
};
