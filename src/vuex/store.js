import user from "./modules/user";
import createPersistedState from 'vuex-persistedstate';
export default {
  modules : {
    user
  },
  state : {
    count: 0
  },
  mutations : {
    increment(state) {
      state.count++;
    }
  },
  plugins : [createPersistedState()]
};
