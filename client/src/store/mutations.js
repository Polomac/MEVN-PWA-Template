import types from './mutation-types';

export default {
  [types.MUTATION_TEMPLATE_NAME](state, payload) {
    // eslint-disable-next-line
    state.stateTemplate = payload;
  },
};
