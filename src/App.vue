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
    font-family: 'Avenir', Helvetica, Arial, sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
}

#nav {
    position: fixed;
    z-index: 99999;
    bottom: 0;
    width: 100%;
    height: 45px;
    overflow: hidden;
    line-height: 45px;
    background: #ffd;

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

@import '../static/reset.css'; // 全局自定义的css样式
</style>
