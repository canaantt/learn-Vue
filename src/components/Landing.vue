<template>
  <div class="LandingComponent">
    <h1>{{mymsg}}</h1>
    <button class="btn btn-primary" v-on:click="gotoDashboard()">Dashboard</button>
  </div>
</template>

<script>
export default {
  name: 'LandingComponent',
  data () {
    return {
      mymsg: 'Landing Component',
      datasets: []
    }
  },
  methods: {
    gotoDashboard: function () {
      this.$router.push('/DashboardComponent')
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
