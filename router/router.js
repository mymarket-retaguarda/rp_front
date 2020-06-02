import Vue from 'vue';
import Router from 'vue-router';
import SalesUser from '../src/components/Sales/SalesUser.vue'
import Products from '../src/components/Products/Products.vue'
import People from '../src/components/People/People.vue'
import Sales from '../src/components/Sales/Sales.vue'
import Financial from '../src/components/Financial/Financial.vue'
import Report from '../src/components/Report/Report.vue'
import Users from '../src/components/Users/Users.vue'
import Admin from '../src/components/Admin/Admin.vue'
import Config from '../src/components/Config/Config.vue'

Vue.use(Router);

const router = new Router({
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
      path: '/people',
      component: People
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
});

export default router;