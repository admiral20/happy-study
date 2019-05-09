<template>
    <div id="app">
        <div id="nav">
            <router-link to="/">
                首页
            </router-link>
            <router-link to="/shopping">
                购物
            </router-link>
            <router-link to="/news">
                新闻
            </router-link>
            <router-link to="/me">
                我的
            </router-link>
        </div>
        <router-view />
    </div>
</template>

<style lang="less">

#app {
    color: #2c3e50;
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
}

#nav {
    background: #ffd;
    bottom: 0;
    height: 45px;
    line-height: 45px;
    overflow: hidden;
    position: fixed;
    width: 100%;
    z-index: 99999;

    a {
        color: #2c3e50;
        display: inline-block;
        font-weight: bold;
        width: 25%;

        &.router-link-exact-active {
            color: #42b983;
        }
    }
}

@import '../static/reset.css'; // 全局自定义的css样式
</style>
