export const state = () => ({
  all: [
    { id: 1, task: "task 1", done: false },
    { id: 2, task: "task 2", done: true },
    { id: 3, task: "task 3", done: true },
    { id: 4, task: "task 4", done: false }
  ],
  viewMode: "all"
});

export const getters = {
  filteredTodos(state) {
    if (state.viewMode === "all") return state.all;
    if (state.viewMode === "done") return state.all.filter(t => t.done);
    if (state.viewMode === "undone") return state.all.filter(t => !t.done);
  }
};

export const mutations = {
  CHANGE_MODE(state, mode) {
    state.viewMode = mode;
  },
  ADD_TODO(state, todo) {
    state.all.unshift(todo);
  }
};
