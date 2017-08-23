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
                    <li v-if="user">
                        <a id="navbarDropdownMenuLink">
                            <img class="navbar-pic" :src="user.thumbnail" alt="Smiley face">
                        </a>
                    </li>
                    <li>
                        <button v-if="isLoggedIn" class="btn btn-danger log navbar-items" @click="googleLogout()">Log out </button>
                        <button v-if="!isLoggedIn" class="btn btn-info log navbar-items" @click="googleLogin()">Log In</button>
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
          this.$router.push('/landing')
        },
        setUser: function (data) {
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
        hello.on('auth.logout', function () {
          self.$store.commit('getUser', null)
        })
        hello.on('auth.change', function () { alert('state changed!') })
      }
    }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="sass">
  @import '../index.scss' 
</style>
<style lang='css'>
    navbar {
        border: none;
        box-shadow: 0 2px 3px $color-gray;
        font-family: $font-family;
        font-weight: $font-weight;
    }

    .navbar-logo-img {
        max-height: 40px;
        image-rendering: crisp-edges;
        margin-right: 10px;
        margin-left: 60px;
    }

    .navbar-logo-text {
        font-size: 18px;
        line-height: 40px;
        vertical-align: middle;
        color: $color-white;
        letter-spacing: 6px;
        text-transform: uppercase;
    }

    .navbar-inverse {
        border: none;
        background-color: $color-onco-blue;
    }

    .navbar-inverse .navbar-toggle {
        border: none
    }

    .navbar-items {
        padding-right: 5px;
        color: #fff;
        margin-top: 12px;
        font-size: 14px;
        cursor: pointer;
        span {
            margin-right: 5px;
            color: #fff;
        }
    }

    // removing bootstrap carat over photo
    .dropdown-toggle::after {
        display: none
    }

    .navbar-inverse .navbar-collapse,
    .navbar-inverse .navbar-form {
        border-color: #0383c2;
    }

    .navbar-inverse .navbar-toggle {
        border-color: #fff;
    }

    .navbar-inverse .navbar-nav>li>a {
        color: $color-white;
    }

    .navbar-pic {
        width: 40px;
        height: 40px;
        border-radius: 50%;
        margin-left: 10px;
        margin-right: 10px;
        cursor: pointer;
    }

    .dropdown-item {
        font-size: 12px;
    }

    .dropdown-menu {
        min-width: 8rem;
    }
</style>
