import Vue from 'vue'

const projectsUrl = 'http://localhost:3000/projects'
export default {
  getProjectByID (id) {
    return Vue.http.get(`http://localhost:3000/projects/` + id)
  },
  getProjects () {
    return Vue.http.get(projectsUrl)
  },
  getProjectsByUserID () {
    return Vue.http.get(projectsUrl)
  }
}
