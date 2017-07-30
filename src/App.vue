<template>
  <div id="app">
    <div class="layout">
      <Navi/>
      <router-view></router-view>
      <div class="footer">
        Created by Jacob Goh (
        <a href="mailto:jacobgoh101@gmail.com">jacobgoh101@gmail.com</a>)
      </div>
    </div>
  </div>
</template>

<script>
import Navi from './components/sub/Navi'
export default {
  name: 'app',
  components: { Navi }
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

.breadcrumb {
  margin: 10px 0;
}

.body {
  background-color: white;
  border-radius: 5px;
  min-height: 500px;
}

.footer {
  padding: 20px 0;
  text-align: center;
}
</style>
