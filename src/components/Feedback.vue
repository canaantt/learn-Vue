<template>
  <div class="FeedBackComponent">
    <h1>{{mymsg}}</h1>
    <p></p>
  </div>
</template>

<script>
export default {
  name: 'FeedBackComponent',
  data () {
    return {
      mymsg: 'FeedBack Component'
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
