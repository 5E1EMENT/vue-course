export default {
  state: {
    counter: 0
  },
  getters: {
    computedCounter (state) {
      return state.counter * Math.floor(Math.random() * 10)
    }
  },
  mutations: {
    changeCounter (state, payload) {
      state.counter+=payload
    }
  },
  actions: {
    asyncChangeCounter({commit}, payload) {
      setTimeout(()=> {
        commit('changeCounter', payload.counterValue)
      },payload.timeoutDelay)
    }
  }
}
