import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
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
    // asyncChangeCounter(context, payload) {
    //   setTimeout(()=> {
    //     context.commit('changeCounter', payload.counterValue)
    //   },payload.timeoutDelay)
    // }
    asyncChangeCounter({commit}, payload) {
      setTimeout(()=> {
        commit('changeCounter', payload.counterValue)
      },payload.timeoutDelay)
    }
  }

})
