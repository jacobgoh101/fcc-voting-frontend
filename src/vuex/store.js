import user from "./modules/user";
import loadingOverlay from "./modules/loadingOverlay";
import popup from "./modules/popup";
import createPersistedState from 'vuex-persistedstate';
export default {
  modules : {
    user,
    loadingOverlay,
    popup
  },
  state : {},
  mutations : {},
  plugins : [createPersistedState()]
};
