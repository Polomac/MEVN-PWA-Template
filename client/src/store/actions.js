import types from './mutation-types';

export default {
  actionTemplate({ commit }, payload) {
    commit(types.MUTATION_TEMPLATE_NAME, payload);
  },
};
