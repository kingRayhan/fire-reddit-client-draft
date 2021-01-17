export const store = () => ({
  errors: {}
});

export const mutations = {
  ADD_ERRORS(state, errors) {
    const allErrors = {};
    for (const key in errors) {
      allErrors[key] = errors[key][0];
    }
    state.errors = allErrors;
  },
  CLEAR_ERRORS(state) {
    state.errors = {};
  }
};
