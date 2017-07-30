import user from "./modules/user";
import loadingOverlay from "./modules/loadingOverlay";
import createPersistedState from 'vuex-persistedstate';
export default {
  modules : {
    user,
    loadingOverlay
  },
  state : {},
  mutations : {},
  plugins : [createPersistedState()]
};
