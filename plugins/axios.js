export default ({ $axios, store, error }) => {
  $axios.onError(error => {
    // if (error.response.data.errors) {
    // }

    // store.commit("errors/ADD_ERRORS", error.response.data.errors);
    store.commit("alert/SHOW_ERROR", error.response.data);
  });
};
