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
    },
    removeUser: state => {
      state.user = null
    },
    setProjects: (state, payload) => {
      state.projects = payload
    }
  },
  actions: {
    setUser: ({commit}, payload) => {
      commit('getUser', payload)
    },
    projectsService: ({commit}) => {
      Vue.http.get('http://localhost:3000/projects')
          .then(function (data) {
            commit('setProjects', data.body)
          })
    }
  }
})
