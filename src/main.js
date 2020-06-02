import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

// Imports Routers
import SalesUser from './components/Sales/SalesUser.vue'
import Products from './components/Products/Products.vue'
import Sales from './components/Sales/Sales.vue'
import Financial from './components/Financial/Financial.vue'
import Report from './components/Report/Report.vue'
import Users from './components/Users/Users.vue'
import Admin from './components/Admin/Admin.vue'
import Config from './components/Config/Config.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    {
      path: '/',
      component: SalesUser
    },
    {
      path: '/products',
      component: Products
    },
    {
      path: '/sales',
      component: Sales
    },
    {
      path: '/financial',
      component: Financial
    },
    {
      path: '/Report',
      component: Report
    },
    {
      path: '/users',
      component: Users
    },
    {
      path: '/admin',
      component: Admin
    },
    {
      path: '/config',
      component: Config
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
