<template>
  <div id="app">
    <div class="layout">
      <Navi/>
      <LoadingOverlay/>
      <Popup/>
      <router-view></router-view>
      <div class="footer">
        Created by Jacob Goh (
        <a href="mailto:jacobgoh101@gmail.com">jacobgoh101@gmail.com</a>)
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from 'vuex'
import Navi from './components/sub/Navi'
import LoadingOverlay from './components/sub/LoadingOverlay'
import Popup from './components/sub/Popup'
export default {
  name: 'app',
  components: { Navi, LoadingOverlay, Popup },
  computed: {
    ...mapState(['user']),
    serverToken() {
      return this.user.serverToken;
    }
  },
  watch: {
    serverToken(serverToken) {
      // always auto update Authorization header when serverToken changed
      this.pino.info('serverToken changed');
      if (serverToken) {
        this.axios.defaults.headers.common['Authorization'] = `JWT ${serverToken}`;
      } else {
        // redirect to home after logout
        this.$router.push('/');
        this.axios.defaults.headers.common['Authorization'] = ``;
      }
    }
  },
  mounted() {
    if (this.serverToken) {
      this.axios.defaults.headers.common['Authorization'] = `JWT ${this.serverToken}`;
    }
  }
}
</script>

<style>
.layout {
  background-color: rgb(236, 236, 236);
}

.header {
  background-color: #7e57c2;
}

.logo {
  font-size: 24px;
  color: white;
  display: inline-block;
  padding: 10px 20px;
}

.nav {
  display: inline-block;
  width: calc(100% - 150px);
  margin: 0 auto;
}

.tab {
  margin: 0 auto;
  width: 400px;
  background-color: rgba(0, 0, 0, 0);
}

.content {
  width: 90%;
  margin: 0 auto;
}

.body {
  background-color: white;
  border-radius: 5px;
  min-height: 500px;
  margin-top: 20px;
}

.footer {
  padding: 20px 0;
  text-align: center;
}
</style>
