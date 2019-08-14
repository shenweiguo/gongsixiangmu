import Vue from 'vue'
import Router from 'vue-router'

//首页
import homePage from "../pages/homePage.vue"
//关于我们
import aboutUs from "../pages/aboutUs.vue"
//产品中心主页面
import productCenterMain from "../pages/systemProductCenter/productCenterMain.vue"
//产品中心 子页面人员基础信息一体化采集
import integratedAcquisition from "../pages/systemProductCenter/productCenter/integratedAcquisition.vue"


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
    },
    //产品中心主页面
    {
      name:"productCenterMain",
      path:"/productCenterMain",
      component:productCenterMain
    },
    //产品中心 人员基础信息一体机
    {
      name:"integratedAcquisition",
      path:"/integratedAcquisition",
      component:integratedAcquisition
    }
  ]
})
