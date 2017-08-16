<template>
  <div class="LandingComponent">
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
.parent {
    width: 1000px;
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
