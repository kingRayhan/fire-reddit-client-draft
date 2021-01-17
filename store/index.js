export const state = () => ({
  counter: 0,
  message: "hey there"
});

export const mutations = {
  increment(state, incrementBy) {
    state.counter += incrementBy;
  },
  decrement(state, decrementBy) {
    state.counter -= decrementBy;
  }
};

export const getters = {};

export const actions = {};

/**
 
mutation -> commit('increment', 145)
action -> dispatch()


 */
