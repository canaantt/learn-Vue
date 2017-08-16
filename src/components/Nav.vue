<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Home</router-link>
            </div>
            <div class="collapse navbar-collapse">
                <ul class="nav navbar-nav">
                    <router-link v-if="isLoggedIn" to="/DashboardComponent" activeClass="active" tag="li"><a>Dashboard</a></router-link>
                    <router-link to="/FeedbackComponent" activeClass="active" tag="li"><a >Feedback</a></router-link>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li v-if="user">{{ user.name }}</li>
                    <li>
                        <button v-if="isLoggedIn" class="btn btn-danger log" @click="googleLogout()">Log out </button>
                        <button v-if="!isLoggedIn" class="btn btn-info log" @click="googleLogin()">Log In</button>
                    </li>
                </ul>
            </div><!-- /.navbar-collapse -->
        </div><!-- /.container-fluid -->
    </nav>
</template>

<script>
    // import {mapActions} from 'vuex'
    import * as hello from 'hellojs'
    export default {
      data () {
        return {
          isDropdownOpen: false
        }
      },
      computed: {
        isLoggedIn () {
          console.log('Boolean, is logged in.')
          return this.$store.getters.authenticated
        },
        user () {
          console.log('In computed user function')
          return this.$store.state.user
        }
      },
      methods: {
        handleLogin: function () {
          console.log('Logging In...')
          this.$store.dispatch('getUser')
        },
        handleLogout: function () {
          console.log('Logging Out...')
          this.$store.commit('removeUser')
        },
        googleLogin: function () {
          hello.login('google', {
            display: 'popup',
            response_type: 'token',
            scope: 'email',
            redirect_uri: '/landing'
          })
        },
        googleLogout: function () {
          hello.logout('google', {})
        },
        setUser: function (data) {
          alert('here!')
          this.$state.commit('getUser', data)
          console.log(data.email)
        }
      },
      created: function () {
        const self = this
        hello.init({
          google: '1098022410981-i511q2bdvm3tb254b3ulmqn7mneb0qkp.apps.googleusercontent.com'
        }, {
          force: true,
          redirect_uri: '/landing'
        })
        hello.on('auth.login', function () {
          hello('google').api('me')
                         .then((data) => {
                           self.$store.commit('getUser', data)
                         })
        })
        hello.on('auth.logout', function () { alert('auth.logout!') })
        hello.on('auth.change', function () { alert('state changed!') })
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '../index.scss' 
  .navbar-right { margin-right: 0px !important}
  .log {margin: 5px 10px 0 0}
</style>
