<template>
  <div class="LandingComponent">
    <h1>{{mymsg}}</h1>
    <h3>This is a fun demo project to learn VueJS v2 using <a href="https://github.com/pagekit/vue-resource" target="_blank">vue-resource</a>, 
    <a href="https://github.com/vuejs/vuex" target="_blank">vuex</a>, 
    <a href="https://github.com/vuejs/vue-router" target="_blank">vue-router</a></h3>
    <p>The source: Udemy</p>
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
  color: #42b983;
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
