import Vue from 'vue'
import Router from 'vue-router'

//首页
import homePage from "../pages/homePage.vue"
//关于我们
import aboutUs from "../pages/aboutUs.vue"

Vue.use(Router)

export default new Router({
  routes: [

    //首页
    {
      name:"homePage",
      path:"/homePage",
      component:homePage
    },
    //关于我们
    {
      name:"aboutUs",
      path:"/aboutUs",
      component:aboutUs
    }
  ]
})
