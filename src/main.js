import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import vuetify from './plugins/vuetify';

// Imports Routers
import Products from './components/Products/Products.vue'
import SalesUser from './components/Sales/SalesUser.vue'


Vue.use(VueRouter);

const router = new VueRouter({
  routes: [
    {
      path: '/products',
      component: Products
    },
    {
      path: '/',
      component: SalesUser
    }
  ]
})

Vue.config.productionTip = false

new Vue({
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app')
