<template>
  <div class="DashboardComponent">
    <h1>{{mymsg}}</h1>
    <button class="btn btn-primary" v-on:click="getDatasets()">Get All the Datasets</button>
    <ul>
        <li v-for="item in datasets">
            {{ item.Name }}
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
      datasets: []
    }
  },
  methods: {
    getDatasets: function () {
      this.$http
          .get('http://localhost:3000/projects', function (err) { console.log(err) })
          .then(function (data) {
            this.datasets = data.body
          })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
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
