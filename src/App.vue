<template>
  <div id="app">
    <!--<h1>[ Hover Here ↓ ]</h1>-->
    <div class="parent">
      <div class="child">
        <!-- <img src="http://rs1183.pbsrc.com/albums/x472/anoccasionaldream/Tumblr%20Photos/roses-vintage.jpg~c200" alt="" width="200" height=" 200" />
        <img src="http://66.media.tumblr.com/7263cede34046dc6aa7e99f18631c9c3/tumblr_inline_n87mtip8VD1rd0aui.png" alt="" width="200" height=" 200" />
        <img src="http://rs1295.pbsrc.com/albums/b623/monazakaria/tumblr-photography-vintage-flowers-7_zpsacc27a78.jpg~c200" alt="" width="200" height=" 200" /> -->
        <img src="http://oncoscape.sttrcancer.org/documentation/photos/mpNavigation/fullmp.png" alt="markers"  height=" 200"/>
        <img src="http://oncoscape.sttrcancer.org/documentation/photos/pcaNavigation/pca.png" alt="pca"  height=" 200"/>
        <img src="http://oncoscape.sttrcancer.org/documentation/photos/survivalNavigation/survival.png" alt="survival"  height=" 200"/>
        <img src="http://oncoscape.sttrcancer.org/documentation/photos/spreadsheetNavigation/spreadsheetOverview.png" alt="spreadsheet"  height=" 200"/>
        <img src="http://oncoscape.sttrcancer.org/documentation/photos/timelineNavigation/timelinesOverview.png" alt="timeline" height=" 200"/>
      </div>
    </div>
    <div class="text"></div>
    <!--<img src="./assets/logo.png">-->
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
  #app {
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
    margin-top: 60px;
  }
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    overflow-X: hidden
  }
  body {
    background: #804b8c
  }
  h1 {
    text-align: center;
    color: #fff;
    opacity: .5;
    font-family: Arial;
    margin-top: 50px
  }
  .parent {
    width: 608px;
    height: 204px;
    margin: 20px auto;
    overflow: hidden
  }

  .parent .child {
    width: 1835px;
    display: inline-block;
    animation: marquee 25s linear infinite;
  }
  .text {
    width: 800px;
    margin: auto;
    color: #fff;
    font-family: sans-serif;
    animation: marqueeText 10s linear infinite;
  }

  @keyframes marquee {
    0% {
      margin-left: 0;
    }
    100% {
      margin-left: calc(-1835px + 608px);
    }
  }
  @keyframes marqueeText {
    0% {
      margin-left: -100%;
    }
    100% {
      margin-left: 100%;
    }
  }
  .parent .child:hover, .text:hover{
    animation-play-state: paused
  }
</style>
<style lang="sass" scoped>
  @import 'index.scss'; 
</style>