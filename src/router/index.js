import Vue from 'vue'
import VueRouter from 'vue-router'
import Login from '../components/Login.vue'
import Home from '../components/Home.vue'

Vue.use(VueRouter)


 const Router = new VueRouter({
  routes: [
    {
      path: '/',
      redirect: '/login'
      
    },
    {
      path: '/login',
      name: 'Login',
      component: Login
      
    },
    {
      path: '/home',
      name: Home,
      component: Home,

    }
  ]
})


Router.beforeEach((to,from,next) => {
  if(to.path =="/login")  next();
  const user = window.sessionStorage.getItem("user");
  if(!user) return next("/login");
   next();
})


export default Router
