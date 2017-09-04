<template>
  <div class="DashboardComponent">
    <h1>{{mymsg}}</h1>
    <!-- <vega-lite :data="values" mark="bar" :encoding="encoding"/>
    <button class="but btn-primary" v-on:click="refreshNumbers()">Refresh</button> -->
    <!-- <div>
      <multiselect v-model="mark" :options="options" :searchable="true" :close-on-select="true" :show-labels="true" placeholder="Pick a mark"></multiselect>
      <vega-lite :data="data" :mark="mark" :encoding="encoding"></vega-lite>
    </div> -->
    <div>
      <multiselect :options="options" :multiple="true" :close-on-select="true" label="name" track-by="name" @select="addEncodingChannel" @remove="removeEncodingChannel"></multiselect>
      <vega-lite :data="data" :mark="mark" :encoding="encoding"></vega-lite>
    </div>
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
import Multiselect from 'vue-multiselect'
export default {
  name: 'DashboardComponent',
  components: { Multiselect },
  data () {
    return {
      mymsg: 'DashboardComponent Component',
      datasets: [],
      projectName: '',
      data: [],
      // data: [
      //   {a: 'A', b: 28}, {a: 'B', b: 55}, {a: 'C', b: 43},
      //   {a: 'D', b: 91}, {a: 'E', b: 81}, {a: 'F', b: 53},
      //   {a: 'G', b: 19}, {a: 'H', b: 87}, {a: 'I', b: 52}
      // ],
      encoding: {
        x: {field: 'age_at_diagnosis', type: 'quantitative'},
        y: {field: 'days_to_death', type: 'quantitative'}
      },
      mark: 'point',
      // availableMarks: ['bar', 'point', 'circle', 'line'],
      options: [
        {
          name: 'Origin - Color',
          channel: {
            color: {field: 'gender', type: 'nominal'}
          }
        },
        {
          name: 'Origin - Shape',
          channel: {
            shape: {field: 'race', type: 'nominal'}
          }
        },
        {
          name: 'Displacement - Opacity',
          channel: {
            opacity: {field: 'KPS', type: 'quantitative'}
          }
        }
      ]
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
    },
    refreshNumbers () {
      this.values = this.values.map(() => {
        return {val: Math.random() * 10}
      })
    },
    addEncodingChannel (newOption) {
      const channel = newOption.channel
      const channelName = Object.keys(channel).pop()
      const channelVal = Object.values(channel).pop()
      this.$set(this.encoding, channelName, channelVal)
    },
    removeEncodingChannel (option) {
      const channel = option.channel
      const channelName = Object.keys(channel).pop()
      this.$delete(this.encoding, channelName)
    },
    getJson (resource) {
      this.$http.get('http://dev.oncoscape.sttrcancer.io/api/gbm_diagnosis/?q=&apikey=password').then((response) => {
        this.data = response.data
      })
    }
  },
  created () {
    this.$store.dispatch('projectsService')
    this.getDatasets()
    this.getJson()
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
  color: #CBCBCB;
}
</style>
