import user from "./modules/user";
export default {
  modules: { user },
  state: {
    count: 0
  },
  mutations: {
    increment(state) {
      state.count++;
    }
  }
};
