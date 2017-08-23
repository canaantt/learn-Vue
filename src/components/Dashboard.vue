<template>
  <div class="DashboardComponent">
    <h1>{{mymsg}}</h1>
    <!-- <button class="btn btn-primary" v-on:click="getDatasets()">Get All the Datasets</button>
    <button class="btn btn-primary" v-on:click="gotoLanding()">Landing</button> -->
    <input type="text" v-model="filterText">
    <p> {{filterText}}</p>
    <!-- <p v-on:mousemove="updateCoordinates($event)">
      Coordinates: {{x}}/{{y}}
      - <span v-on:mousemove.prevent="">Dead Spot</span>
    </p> -->
    <ul>
        <li v-for="item in filteredDatasets">
          <div class="col-md-12">
            <div class="panel panel-success">
              <div class="panel-heading">
                  <h3 class="panel-title">
                      {{ item.Name }}
                  </h3>
              </div>
              <div class="panel-body">
                  <div class="pull-left">
                      <p>{{ item.Description }}</p>
                      <span>Created Time: {{ item.Date | date-formate-time }}</span>
                  </div>
                  <div class="pull-right">
                    <ul>
                      <li><button class="btn btn-success" @click="ProjectDetail()">Edit</button></li>
                      <li><button class="btn btn-success">Delete</button></li>
                    </ul>
                  </div>
              </div>
            </div>
          </div>  
        </li>
    </ul>
  </div>
</template>

<script>
import { datasetsMixin } from '../services/datasetsMixin'
import projectService from '../services/projects.service'
export default {
  name: 'DashboardComponent',
  mixins: [datasetsMixin],
  filters: {
    extractDate (value) {
      console.log('in dashboard local filter')
      const d = value.split('T')
      const d1 = d[0].split('-')
      return d1[1] + '/' + d1[2] + '/' + d1[0]
    }
  },
  methods: {
    getDatasets: function () {
      projectService.getProjects()
                    .then(data => { this.datasets = data })
    },
    searchProject: function (event) {
      this.projectName = event.target.value
    },
    updateCoordinates: function (event) {
      this.x = event.clientX
      this.y = event.clientY
    }
  },
  created () {
    this.getDatasets()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
  color: cornflowerblue;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
