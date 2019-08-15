<template>
  <div class="main">
      <!--头部内容-->
    <header class="homeHerder">
      <top-module></top-module>
    </header>
    <!--头部内容结束-->
    <nav class="home-nav">
      <navigation-bar></navigation-bar>
    </nav>
    <!--导航条-->
    <section class="integrated-img">
        <img src="../../../assets/images/productCenter/pr_1.jpg" alt="">
    </section>

    <section class="integrated-title">
        人员基础信息一体化采集设备    列装型号：PJS012
    </section>.
    <!--人员基础结束-->
    <section class="integrated-imgm">
        <span class="integrated-imgi"><img src="../../../assets/images/productCenter/pr_3.jpg" alt=""></span>
    </section>

     <section class="integrated-title">
        设备简介
    </section>
    <!--设备简介结束-->
    <section class="integrated-deviceList">
        <span>人员基础信息一体化采集设备是公安部定型列装的一款产品。它根据公安部下发的研制大纲和战术技术指标，历时四年研制而成。设备能够通过各信息接口平台与已建成投入使用的现有分散系统完整对接，即时将比对结果反馈给采集单位，做到“采集即录入，录入即核查，核查即反馈”，是一个真正能够实现“一端采集、全警共享”功能的综合信息应用系统。</span>
        <span> 设备可以广泛应用于公安派出所、刑侦、法治、看守所和监狱等执法办案部门，是目前公安警务综合应用平台前端最基础、最核心的信息采集设备。设备不仅能够全面采集包括身份证、人员基本信息、指掌纹、人像、足迹、身高体重足长、笔迹、体貌特征、DNA样本、手机、银行卡、物证、声纹、虹膜等全部人员基础信息，而且能够优先从源头快速获取一手嫌疑人信息资源，为案件侦破提供有力的信息证据支持，为标准化信息采集平台积累海量数据。</span>
    </section>
    <!--设备简介详情-->

     <section class="integrated-title">
        设备研制历程
    </section>
    <!--设备简介结束-->
    <section class="integrated-equipment">
        <div class="integrated-equimg"><img src="../../../assets/images/productCenter/pr_5.jpg" alt=""></div>
    </section>
    <!--设备流程图-->

    <section class="integrated-task">
      <div class="integrated-taski"><img src="../../../assets/images/productCenter/pr_4.jpg" alt=""></div>
    </section>
    <!--任务来源-->






    <div style="height:200px;"></div>


    <!--底部导航-->
    <footer class="home-footer">
      <footer-navigation></footer-navigation>
    </footer>
    <!--底部导航结束-->
  </div>
</template>

<script>
//引入顶部内容
import topModule from "../../../components/topModule.vue";
import navigationBar from "../../../components/navigationBar.vue";
import footerNavigation from "../../../components/footerNavigation.vue";
export default {
  data() {
    return {};
  },
  //模块
  components: {
    topModule,
    navigationBar,
    footerNavigation
  }
};
</script>

<style scoped>
.integrated-taski{
  width: 1380px;
  height: 50px;
}
.integrated-taski img{
  width: 100%;
  height: 100%;
}
.integrated-task{
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 100%;
  margin-top: 150px;
}
.integrated-imgi{
  width: 1300px;
  height: 500px;
}
.integrated-imgi img{
  width: 100%;
  height: 100%;
}
.integrated-imgm{
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.integrated-equimg{
  display: flex;
  justify-content: center;
  text-align: center;
  width: 1400px;
  height: 300px;
}
.integrated-equimg img{
  width: 100%;
  height: 100%;
}
.main{
    background: #f7f7f7;
}
.integrated-equipment{
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: center;
    text-align: center;
}
.integrated-deviceList{
    padding: 0 10%;
    justify-content: center;
    display: flex;
    flex-direction: column;
}
.integrated-deviceList span:nth-child(1){
    text-align: left;
    font-size: 16px;
    color: #1b1717;
    line-height: 27px;
    text-indent: 2rem;
}
.integrated-deviceList span:nth-child(2){
    text-align: left;
    font-size: 16px;
    color: #1b1717;
    line-height: 27px;
    text-indent: 2rem;
}
.integrated-title{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 100px;
    font-weight: bold;
    font-size: 30px;
    color: #353232;
}
.homeHerder {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.home-nav {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.home-footer {
  display: flex;
  flex-direction: row;
  width: 100%;
}
.integrated-img{
    width: 100%;
    height: 500px;
}
.integrated-img img{
    width: 100%;
    height: 100%;
}
</style>