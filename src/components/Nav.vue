<template>
  <div class="NavComponent">
    <h1>{{mymsg}}</h1>
  </div>
</template>

<script>
export default {
  name: 'NavComponent',
  data () {
    return {
      mymsg: 'Nav Component'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass" scoped>
  @import '../index.scss'; 
  
</style>
