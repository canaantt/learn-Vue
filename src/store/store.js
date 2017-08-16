import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
    user: null
  },
  getters: {
    authenticated: state => {
      return state.user !== null
    }
  },
  mutations: {
    getUser: (state, payload) => {
      state.user = payload
      console.log('in mutation getUser', state.user)
    },
    removeUser: state => {
      state.user = null
    }
  },
  actions: {
    setUser: ({commit}, payload) => {
      console.log('in actions: getUser', payload.email)
      commit('getUser', payload)
    }
  }
})
