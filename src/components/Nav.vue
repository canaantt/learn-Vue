<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Home</router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link to="/DashboardComponent" activeClass="active" tag="li"><a>Dashboard</a></router-link>
                    <router-link to="/FeedbackComponent" activeClass="active" tag="li"><a>Feedback</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                  <li><a href="#">Log In</a></li>
                  <li><a href="#">Log Out</a></li>
                </ul>
                <strong class="navbar-text navbar-right">User</strong>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    // import {mapActions} from 'vuex';

    export default {
      data () {
        return {
          isDropdownOpen: false
        }
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '../index.scss'; 
  
</style>
