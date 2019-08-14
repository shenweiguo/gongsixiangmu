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
        <el-carousel trigger="click" style="height:530px;">
          <el-carousel-item v-for="(item,index) in 4" :key="index" style="height:530px">
            <img src="../assets/images/shouye/luo_1.jpg" alt="轮播图" />
          </el-carousel-item>
        </el-carousel>
      </div>
    </section>
    <!--轮播图结束-->

    <div class="home-Product-title">
      <span class="home-Product-titlei">
        <img src="../assets/images/shouye/shouye_1.png" alt />
      </span>
    </div>
    <!--产品中心-->
    <section class="home-Product-Exhibition">
      <span class="home-Product-Exhibitioni">
        <img src="../assets/images/shouye/h_2.jpg" alt />
      </span>
      <span class="home-Product-Exhibitioni1">
        <img src="../assets/images/shouye/h_3.jpg" alt />
      </span>
      <span class="home-Product-Exhibitioni2">
        <img src="../assets/images/shouye/h_4.jpg" alt />
      </span>
      <span class="home-Product-Exhibitioni3">
        <img src="../assets/images/shouye/h_5.jpg" alt />
      </span>
      <span class="home-Product-Exhibitioni3">
        <img src="../assets/images/shouye/h_5_1.jpg" alt />
      </span>
    </section>
    <!--产品中心设备-->
     <div class="home-Product-title">
      <span class="home-Product-titlei">
        <img src="../assets/images/shouye/shouye_2.png" alt />
      </span>
    </div>
    <!--解决方案结束-->
    <section class="home-Product-Solve">
      <div class="home-Product-slist1">

      </div>
      <!--第一个结束-->
    </section>
    <!--解决方案列表-->
    <div class="home-Product-title">
      <span class="home-Product-titlei">
        <img src="../assets/images/shouye/shouye_3.png" alt />
      </span>
    </div>
    <!--服务支持结束-->
    <section class="home-Product-fuwu">

        <div class="home-Product-fm">
          <span><img src="../assets/images/shouye/f_2.jpg" alt=""></span>
          <span>资料下载</span>
        </div>
        <div class="home-Product-fm">
          <span><img src="../assets/images/shouye/f_3.jpg" alt=""></span>
          <span>资料下载</span>
        </div>
        <div class="home-Product-fm">
          <span><img src="../assets/images/shouye/f_4.jpg" alt=""></span>
          <span>资料下载</span>
        </div>
    </section>
    <div style="height:200px;"></div>

    <!--底部导航-->
    <footer class="home-footer">
      <footer-navigation></footer-navigation>
    </footer>
    <!--底部导航-->
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
      imgurl: [{ src: require("../assets/images/shouye/luo_1.jpg") }]
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
.home-Product-slist1{
  display: flex;
  flex-direction: column;
  width: 30%;
  background: #5e92d1;
}
.home-Product-Solve{
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 640px;
  background: url("../assets/images/shouye/h_14.jpg")no-repeat;
}
.home-Product-fm{
  display: flex;
  flex-direction: column;
  /* background: red; */
}
.home-Product-fuwu{
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: url("../assets/images/shouye/f_1.jpg");
  height: 435px;
  margin-top: 65px;
}
.home-Product-Exhibition span{
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
  height: 530px;
  display: flex;
  flex-direction: row;
}
.block {
  width: 100%;
  height: 530px;
}
.block img {
  width: 100%;
  height: 530px;
}
.el-carousel__item h3 {
  color: #475669;
  font-size: 14px;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}
</style>
