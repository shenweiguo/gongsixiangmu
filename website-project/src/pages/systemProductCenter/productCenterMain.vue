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

    <section class="great-title">
      <span>
        <img src="../../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>产品中心</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--产品中心-->
    <section class="home-Product-Exhibition">
      <span class="home-Product-Exhibitioni">
        <router-link :to="{path:'/integratedAcquisition'}">
          <img src="../../assets/images/shouye/h_2.jpg" alt />
        </router-link>
      </span>

      <span class="home-Product-Exhibitioni1">
        <router-link :to="{path:'/Microphone'}">
          <img src="../../assets/images/shouye/h_3.jpg" alt />
        </router-link>
      </span>
      <span class="home-Product-Exhibitioni2">
        <router-link :to="{path:'/collectionManagement'}">
          <img src="../../assets/images/shouye/h_4.jpg" alt />
        </router-link>
      </span>
      <span class="home-Product-Exhibitioni3">
        <router-link :to="{path:'/speechRecognition'}">
          <img src="../../assets/images/shouye/h_5.jpg" alt />
        </router-link>
      </span>
      <span class="home-Product-Exhibitioni3">
        <router-link :to="{path:'/interrogationAssistant'}">
          <img src="../../assets/images/shouye/h_5_1.jpg" alt />
        </router-link>
      </span>
    </section>
    <!--产品中心设备-->

    <!-- <div style="height:200px;"></div> -->

    <!--底部导航-->
    <footer class="home-footer">
      <footer-navigation></footer-navigation>
    </footer>
    <!--底部导航结束-->
  </div>
</template>

<script>
import topModule from "../../components/topModule.vue";
import navigationBar from "../../components/navigationBar.vue";
import footerNavigation from "../../components/footerNavigation.vue";

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
.home-footer {
  display: flex;
  flex-direction: row;
  width: 100%;
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
.home-Product-Exhibition span {
  margin: 0 20px;
  padding-bottom: 80px;
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
</style>
