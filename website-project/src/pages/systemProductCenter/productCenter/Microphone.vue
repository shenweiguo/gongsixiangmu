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


    <section class="micro-lunimg">
        <img src="../../../assets/images/productCenter/pr_6.jpg" alt="">
    </section>
    <!--聆听图片结束-->

    <section class="micro-title1">
        阵列传声器
    </section>
    <!--标题结束-->
    <section class="micro-title1m">
        <span><img src="../../../assets/images/productCenter/pr_7.jpg" alt=""></span>
        <span>阵列传声器是宏正道研发人员针对语音识别（ASR）和语义理解（NLP）应用，尤其是大政法领域执法办案场景所研制的。阵列传声器能够实现噪声抑制、混响消除、串音消除、回声抵消、声源测向、波束形成、阵列增益以及远场近场模型匹配等功能。 宏正道阵列传声器是一款兼顾远场和近场声音采集的产品，它可以完美地与腾讯语音引擎、语义理解引擎和星图引擎匹配结合，它是实现智能语音识别、语义理解和语音交互不可或缺的前端设备。   </span>
    </section>
    <!--标题列表展示-->
    <section class="micro-performance">
        <div class="micro-performancei"><img src="../../../assets/images/productCenter/pr_9.jpg" alt=""></div>

    </section>
    <!--技能性能-->

    <div style="height:200px;"></div>

    <!--底部导航-->
    <footer class="home-footer">
      <footer-navigation></footer-navigation>
    </footer>
    <!--底部导航结束-->
  </div>
</template>

<script>
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
.micro-performancei{
    width: 100%;
    /* height: 1300px; */
    display: flex;
    flex-direction: row;
}
.micro-performancei img{
    width: 100%;
    height: 100%;
}
.micro-performance{
    display: flex;
    flex-direction: row;
    padding-top: 50px;
    background: #f7f7f7;
}
.micro-title1m span:nth-child(1){

    display: flex;
    flex-direction: row;
    justify-content: center;
}
.micro-title1m span:nth-child(2){

    display: flex;
    flex-direction: row;
    text-align: left;
    margin-left: 100px;
    color: #141010;
    line-height: 30px;
    text-indent: 2rem;
}
.micro-title1m{
    display: flex;
    flex-direction: row;
    background: #f7f7f7;
    padding: 0 200px;
}
.micro-title1{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 150px;
    padding-bottom: 100px;
    font-weight: bold;
    font-size: 30px;
    color: #353232;
    background: #f7f7f7;
}
.micro-lunimg{
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 500px;
}
.micro-lunimg img{
    width: 100%;
    height: 100%;
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
</style>