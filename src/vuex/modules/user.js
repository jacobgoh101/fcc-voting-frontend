export default {
  state : {
    socialToken: "",
    serverToken: "",
    email: "",
    name: "",
    network: "",
    socialId: "",
    userId: ""
  },
  mutations : {
    updateSocialToken(state, token) {
      state.socialToken = token;
    },
    updateServerToken(state, token) {
      state.serverToken = token;
    },
    updateUserInfo(state, info) {
      if (info.email) 
        state.email = info.email;
      if (info.name) 
        state.name = info.name;
      if (info.network) 
        state.network = info.network;
      if (info.socialId) 
        state.socialId = info.socialId;
      if (info.userId) 
        state.userId = info.userId;
      }
    ,
    logoutMutation(state) {
      for (let key in state) {
        state[key] = "";
      }
    }
  },
  actions : {
    logout({commit, dispatch}) {
      commit('logoutMutation');
      dispatch('openThenClosePopup', {
        position: 'top',
        msg: 'Successfully Logged out'
      })
    }
  }
};
