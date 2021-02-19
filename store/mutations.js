import * as types from './mutations-types';
const mutations = {
  [types.SET_ADDNUM_MUTATION](state, payload) {
    state.count++;
  },
  [types.SET_DELNUM_MUTATION](state, payload) {
    state.count--;
  },
  [types.SET_ASYNCADDNUM_MUTATION](state, payload) {
    state.count = payload;
  },

}

export default mutations;
