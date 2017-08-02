export default {
  state : {
    bottomPopup: false,
    topPopup: false,
    topPopupMsg: false,
    leftPopup: false,
    rightPopup: false
  },
  mutations : {
    openPopup(state, obj) {
      state[obj.position + 'Popup'] = true
      state[obj.position + 'PopupMsg'] = obj.msg
    },
    closePopup(state, obj) {
      state[obj.position + 'Popup'] = false
    }
  },
  actions : {
    openThenClosePopup({
      commit
    }, obj) {
      if (!obj.timeout) 
        obj.timeout = 3000;
      commit('openPopup', obj);
      setTimeout(() => {
        commit('closePopup', obj);
      }, obj.timeout)
    }
  }
};
