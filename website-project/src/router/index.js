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
//产品中心 子页面 阵列传声器
import Microphone from "../pages/systemProductCenter/productCenter/Microphone.vue"
//产品中心  子页面人员采集管理系统
import collectionManagement from "../pages/systemProductCenter/productCenter/collectionManagement.vue"
//产品中心  子页面正道智能语音识别系统
import speechRecognition from "../pages/systemProductCenter/productCenter/speechRecognition.vue"
//产品中心  子页面正道智慧审讯助手
import interrogationAssistant from "../pages/systemProductCenter/productCenter/interrogationAssistant.vue"
//解决方案 大政法办案中心解决方案
import greatPolitical from "../pages/systemSolution/greatPolitical.vue"
//解决方案  基层队所解决方案
import rootsTeam from "../pages/systemSolution/rootsTeam.vue";
//解决方案  大政法
import politicalLaw from "../pages/systemSolution/politicalLaw.vue"
//解决方案  平安城市  平安中国
import intelligentVoice from "../pages/systemSolution/intelligentVoice.vue"
//案例展示
import casePresentation from "../pages/casePresentation.vue"
//服务支持  下载专区
import downloadZone from "../pages/serviceSupport/downloadZone.vue"
//服务支持  售后服务机构分布
import saleService from "../pages/serviceSupport/saleService.vue"
//服务支持  常见问题解答
import commonProblem from "../pages/serviceSupport/commonProblem.vue"
//生态合作  合作伙伴分布
import cooperativePartner from "../pages/ecoCooperation/cooperativePartner.vue"
//生态合作  代理合作
import agencyCooperation from "../pages/ecoCooperation/agencyCooperation.vue"
//生态合作   渠道合作
import channelCooperation from "../pages/ecoCooperation/channelCooperation.vue"
//加入联腾   招贤纳士
import wiseVirtuous from "../pages/joinLenton/wiseVirtuous.vue"
//加入联腾   简历展示
import resumePresentation from "../pages/joinLenton/resumePresentation.vue"
//加入联腾   联系我们
import contactUs from "../pages/joinLenton/contactUs.vue"



Vue.use(Router)

export default new Router({
  routes: [

    //首页
    {
      name:"homePage",
      path:"/",
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
    },
    //产品中心 子页面 阵列传声器
    {
      name:"Microphone",
      path:"/Microphone",
      component:Microphone
    },
    //产品中心 子页面人员采集管理系统
    {
      name:"collectionManagement",
      path:"/collectionManagement",
      component:collectionManagement
    },
    //产品中心 正道智能语音识别系统
    {
      name:"speechRecognition",
      path:"/speechRecognition",
      component:speechRecognition
    },
    //产品中心  子页面正道智慧审讯助手
    {
      name:"interrogationAssistant",
      path:"/interrogationAssistant",
      component:interrogationAssistant
    },
    //解决方案 大政法办案中心解决方案
    {
      name:"greatPolitical",
      path:"/greatPolitical",
      component:greatPolitical
    },
    //解决方案  基层队所解决方案
    {
      name:"rootsTeam",
      path:"/rootsTeam",
      component:rootsTeam
    },
    //解决方案  大政法
    {
      name:"politicalLaw",
      path:"/politicalLaw",
      component:politicalLaw
    },
    //解决方案  平安城市  平安中国
    {
      name:"intelligentVoice",
      path:"/intelligentVoice",
      component:intelligentVoice
    },
    //案例展示
    {
      name:"casePresentation",
      path:"/casePresentation",
      component:casePresentation
    },
    //服务支持  下载专区
    {
      name:"downloadZone",
      path:"/downloadZone",
      component:downloadZone
    },
    //服务支持  售后服务机构分布
    {
      name:"saleService",
      path:"/saleService",
      component:saleService
    },
    //服务支持  常见问题解答
    {
      name:"commonProblem",
      path:"/commonProblem",
      component:commonProblem
    },
    //生态合作  合作伙伴分布
    {
      name:"cooperativePartner",
      path:"/cooperativePartner",
      component:cooperativePartner
    },
    //生态合作  代理合作
    {
      name:"agencyCooperation",
      path:"/agencyCooperation",
      component:agencyCooperation
    },
    //生态合作   渠道合作
    {
      name:"channelCooperation",
      path:"/channelCooperation",
      component:channelCooperation
    },
    //加入联腾   招贤纳士
    {
      name:"wiseVirtuous",
      path:"/wiseVirtuous",
      component:wiseVirtuous
    },
    //加入联腾   简历展示
    {
      name:"resumePresentation",
      path:"/resumePresentation",
      component:resumePresentation
    },
    //加入联腾   联系我们
    {
      name:"contactUs",
      path:"/contactUs",
      component:contactUs
    }
  ]
})
