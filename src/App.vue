<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">首页</router-link>
      <router-link to="/shopping">购物</router-link>
      <router-link to="/news">资讯</router-link>
      <router-link to="/me">我的</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style lang="less">
@import './assets/reset.css'; // 全局自定义的css样式

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  padding-top: 5px;
}
#nav {
  position: fixed;
  bottom: 0;
  overflow: hidden;
  height: 45px;
  line-height: 45px;
  background: #fff;
  width: 100%;
  a {
    display: inline-block;
    width: 25%;
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
