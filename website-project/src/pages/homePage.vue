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

    <!--轮播图-->
    <section class="home-Wheel">
      <div class="block">
        <!-- <img src="../assets/images/shouye/luo_1.jpg" alt="轮播图"> -->
        <el-carousel trigger="click" style="height:500px;">
          <el-carousel-item v-for="(item,index) in imgurl" :key="index" style="height:500px">
            <img :src="item.src" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    <!--轮播图结束-->

    <section class="great-title">
      <span>
        <img src="../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>产品中心</span>
      <span>
        <img src="../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->
    <!--产品中心-->
    <section class="home-Product-Exhibition">
      <span class="home-Product-Exhibitioni">
        <router-link :to="{path:'/integratedAcquisition'}">
          <img src="../assets/images/shouye/h_2.jpg" alt />
        </router-link>
      </span>
      <span class="home-Product-Exhibitioni1">
        <router-link :to="{path:'/Microphone'}">
          <img src="../assets/images/shouye/h_3.jpg" alt />
        </router-link>
      </span>
      <span class="home-Product-Exhibitioni2">
        <router-link :to="{path:'/collectionManagement'}">
          <img src="../assets/images/shouye/h_4.jpg" alt />
        </router-link>
      </span>
      <span class="home-Product-Exhibitioni3">
        <router-link :to="{path:'/speechRecognition'}">
          <img src="../assets/images/shouye/h_5.jpg" alt />
        </router-link>
      </span>
      <span class="home-Product-Exhibitioni3">
        <router-link :to="{path:'/interrogationAssistant'}">
          <img src="../assets/images/shouye/h_5_1.jpg" alt />
        </router-link>
      </span>
    </section>
    <!--产品中心设备-->
    <section class="great-title">
      <span>
        <img src="../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>解决方案</span>
      <span>
        <img src="../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->
    <!--解决方案结束-->
    <section class="home-Product-Solve">
      <div class="home-Product-slist1">
        <span class="home-Product-slist1s">
          <img src="../assets/images/shouye/shouye_5.png" alt />
        </span>
        <div class="home-Product-slist1m">
          <span>大政法办案中心解决方案</span>
          <span>基于对大政法执法办案中心十余年的理解，从前期规划设计，到设备和系统集成和项目实施，直至交付使用，我们能够提供完整的建设解决方案 ......</span>
          <span>
            <span class="home-Product-slists">H</span>
          </span>
        </div>
      </div>
      <!--第一个结束-->

      <div class="home-Product-slist1">
        <span class="home-Product-slist1s">
          <img src="../assets/images/shouye/shouye_4.png" alt />
        </span>
        <div class="home-Product-slist1m">
          <span>基层队所解决方案</span>
          <span>通过对广大基层队所的部署经验，我们对执法办案人员的日常使用和业务需求有着深入的了解，可以根据用户的行业特点和具体业务需求出具定制化解决方案 ......</span>
          <span>
            <span class="home-Product-slists">H</span>
          </span>
        </div>
      </div>
      <!--第一个结束-->

      <div class="home-Product-slist1">
        <span class="home-Product-slist1s">
          <img src="../assets/images/shouye/shouye_7.png" alt />
        </span>
        <div class="home-Product-slist1m">
          <span>智能语音识别解决方案</span>
          <span>依托腾讯云语音识别引擎等底层核心技术，我们推出正道系列智能语音识别应用产品，可广泛应用于多种业务场景，如智能审讯笔录、接警语音转表单和远程会议等等 ......</span>
          <span>
            <span class="home-Product-slists">H</span>
          </span>
        </div>
      </div>
      <!--第一个结束-->

      <div class="home-Product-slist1">
        <span class="home-Product-slist1s">
          <img src="../assets/images/shouye/shouye_6.png" alt />
        </span>
        <div class="home-Product-slist1m">
          <span>智能语义理解解决方案</span>
          <span>依托腾讯云语义理解引擎和星图引擎，我们研发出系列智能语义理解应用产品，可广泛应用于多种业务场景，如智慧审讯助手、指挥中心语音交互等等 ......</span>
          <span>
            <span class="home-Product-slists">H</span>
          </span>
        </div>
      </div>
      <!--第一个结束-->
    </section>
    <!--解决方案列表-->
    <section class="great-title">
      <span>
        <img src="../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>服务支持</span>
      <span>
        <img src="../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--服务支持结束-->
    <section class="home-Product-fuwu">
      <div class="home-Product-fm">
        <span>
          <img src="../assets/images/shouye/shouye_11.png" alt />
        </span>
        <span>资料下载</span>
      </div>
      <div class="home-Product-fm">
        <span>
          <img src="../assets/images/shouye/shouye_9.png" alt />
        </span>
        <span>售后服务</span>
      </div>
      <div class="home-Product-fm">
        <span>
          <img src="../assets/images/shouye/shouye_10.png" alt />
        </span>
        <span>常见问题解答</span>
      </div>
    </section>
    <div style="height:100px;"></div>

    <!--底部导航-->
    <footer class="home-footer">
      <footer-navigation></footer-navigation>
    </footer>
    <!--底部导航结束-->

    <section class="home-fixed">
      <img src="../assets/images/shouye/h_15.jpg" alt />
    </section>
    <!--二维码定位-->
  </div>
  <!--所有内容-->
</template>
<script>
//引入顶部内容
import topModule from "../components/topModule.vue";
import navigationBar from "../components/navigationBar.vue";
import footerNavigation from "../components/footerNavigation.vue";

export default {
  data() {
    return {
      imgurl: [
        { src: require("../assets/images/shouye/luo_1.jpg") },
        { src: require("../assets/images/shouye/luo_2.jpg") },
        { src: require("../assets/images/shouye/luo_3.jpg") },
        { src: require("../assets/images/shouye/luo_4.jpg") }
      ]
    };
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
.home-fixed {
  display: flex;
  position: fixed;
  top: 430px;
  right: 0px;
  z-index: 999;
}
.main {
  background: #f7f7f7;
}
.great-title span:nth-child(2) {
  font-weight: bold;
  font-size: 30px;
  color: #353232;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 10px;
}
.great-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 100px;
}
.home-Product-slist1s {
  margin-top: 70px;
}
.home-Product-slists {
  width: 35px;
  height: 35px;
  line-height: 35px;
  background: #a71721;
  font-weight: normal;
  text-align: center;
}
.home-Product-slist1m span:nth-child(1) {
  font-size: 20px;
  font-weight: bold;
  margin-top: 60px;
}
.home-Product-slist1m span:nth-child(2) {
  margin-top: 20px;
  text-align: left;
  line-height: 25px;
}
.home-Product-slist1m span:nth-child(3) {
  display: flex;
  justify-content: center;
}
.home-Product-slist1m {
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 0 70px;
  color: #ffffff;
  /* margin-top: 140px; */
}
.home-Product-slist1 {
  display: flex;
  flex-direction: column;

  flex: 1;
  background-color: rgba(103, 152, 212, 0.8);
  border-right: 1px solid #4682bd;
}
.home-Product-slist1:hover{
  background-color: rgba(181,62,97,0.8);
  cursor: pointer;
}
.home-Product-Solve {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 640px;
  background: url("../assets/images/shouye/h_14.jpg") no-repeat;
}
.home-Product-fm {
  display: flex;
  flex-direction: column;
  padding: 0 100px;
  /* background: red; */
}
.home-Product-fm span:nth-child(2) {
  color: #ffffff;
  font-size: 16px;
  margin-top: 50px;
}
.home-Product-fuwu {
  width: 100%;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: url("../assets/images/shouye/f_1.jpg") no-repeat;
  height: 435px;
  background-size: cover;
}
.home-Product-Exhibition span {
  margin: 0 20px;
}
.home-Product-Exhibitioni3 {
  display: flex;
  width: 218px;
  height: 330px;
}
.home-Product-Exhibitioni1 {
  display: flex;
  width: 190px;
  height: 250px;
}
.home-Product-Exhibitioni2 {
  display: flex;
  width: 218px;
  height: 330px;
}
.home-Product-Exhibitioni {
  width: 326px;
  height: 430px;
}
.home-Product-Exhibitioni img {
  width: 100%;
  height: 100%;
}
.home-Product-Exhibition {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f7f7f7;
  align-items: flex-end;
}

.home-Product-titlei {
  width: 300px;
  height: 38px;
  margin-top: 160px;
}
.home-Product-titlei img {
  width: 100%;
  height: 100%;
}
.home-Product-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f7f7f7;
  text-align: center;
  padding-bottom: 30px;
}
.el-carousel__container {
  position: relative;
  height: 530px;
}
.el-carousel__arrow {
  height: 530px;
  top: 50%;
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
.home-Wheel {
  width: 100%;
  height: 500px;
  display: flex;
  flex-direction: row;
}
.block {
  width: 100%;
  height: 500px;
}
.block img {
  width: 100%;
  height: 100%;
}

.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 5330px;
  margin: 0;
  background: red;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
