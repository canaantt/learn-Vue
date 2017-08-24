import Vue from 'vue'
import Vuex from 'vuex'
import VueResource from 'vue-resource'

Vue.use(Vuex)
Vue.use(VueResource)

export const store = new Vuex.Store({
  state: {
    user: null,
    projects: [],
    selectedProjects: null
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
    },
    setProjects: state => {
      this.projects = []
    }
  },
  actions: {
    setUser: ({commit}, payload) => {
      console.log('in actions: getUser', payload.email)
      commit('getUser', payload)
    },
    projectsService: ({commit}) => {
      this.$http.get('localhost:3000/projects')
          .then(function (data) {
            commit('setProjects', data)
          })
    }
  }
})
