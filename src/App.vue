<template>
  <div id="app">
    <!--<h1>[ Hover Here ↓ ]</h1>-->
    <app-header></app-header>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
import NavComponent from '@/components/Nav'
export default {
  name: 'app',
  components: {
    appHeader: NavComponent
  }
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 0px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-X: hidden
  }
  body {
    background: #FFF
  }
  h1 {
    text-align: center;
    color: #fff;
    opacity: .5;
    font-family: Arial;
    margin-top: 50px
  }
</style>
<style lang="sass" scoped>
  @import 'index.scss'; 
</style>