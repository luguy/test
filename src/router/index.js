import Vue from 'vue'
import VueRouter from 'vue-router'
 
import Register from '../pages/Register'
import Dept from '../pages/Dept'
import Doctor from '../pages/Doctor'
 
Vue.use(VueRouter)
 
export default new VueRouter({
  // 多个路由
  routes:[
    {
      path:'/register',
      component: Register
    },
    {
        path:'/dept',
        component: Dept
    },
    {
        path:'/doctor',
        component: Doctor
    }

  ]
})