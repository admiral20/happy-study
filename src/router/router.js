import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
    mode: 'history',
    base: process.env.BASE_URL,
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../components/pages/home.vue')
        },
        {
            path: '/shopping',
            name: 'shopping',
            component: () => import('../components/pages/shopping.vue')
        },
        {
            path: '/news',
            name: 'news',
            component: () => import('../components/pages/news.vue')
        },
        {
            path: '/me',
            name: 'me',
            component: () => import('../components/pages/me.vue')
        }
    ]
})
