<template>
  <div class="DashboardComponent">
    <h1>{{mymsg}}</h1>
    <!-- <button class="btn btn-primary" v-on:click="getDatasets()">Get All the Datasets</button>
    <button class="btn btn-primary" v-on:click="gotoLanding()">Landing</button> -->
    <input type="text" v-on:input="searchProject">
    <p> {{projectName}}</p>
    <!-- <p v-on:mousemove="updateCoordinates($event)">
      Coordinates: {{x}}/{{y}}
      - <span v-on:mousemove.prevent="">Dead Spot</span>
    </p> -->
    <ul>
        <li v-for="item in datasets">
          <div class="col-md-12">
            <div class="panel panel-success">
              <div class="panel-heading">
                  <h3 class="panel-title">
                      {{ item.Name }}
                  </h3>
              </div>
              <div class="panel-body">
                  <div class="pull-right">
                      <p>{{ item.Description }}</p>
                  </div>
                  <div class="pull-left">
                      <button class="btn btn-success" @click="ProjectDetail()">Edit</button>
                      <button class="btn btn-success">Delete</button>
                  </div>
              </div>
            </div>
          </div>  
        </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'DashboardComponent',
  data () {
    return {
      mymsg: 'DashboardComponent Component',
      datasets: [],
      projectName: '',
      x: '',
      y: ''
    }
  },
  methods: {
    getDatasets: function () {
      this.datasets = this.$store.state.projects
      console.log('in dashboard this, datasets is ', this.datasets)
    },
    ProjectDetail: function () {
      this.$http
          .get('http://localhost:3000/projects', function (err) { console.log(err) })
          .then(function (data) {
            this.datasets = data.body
          })
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
    this.$store.dispatch('projectsService')
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
