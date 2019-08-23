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
    <section class="case-lun">
        <img src="../assets/images/casePresentation/ca_1.jpg" alt="">
    </section>
    <!--图片结束-->

    <section class="great-title">
      <span>
        <img src="../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>智能语音识别解决方案</span>
      <span>
        <img src="../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->

    <section class="case-list1">
        <div class="case-list1main">
          <div><img src="../assets/images/casePresentation/ca_2.jpg" alt=""></div>
          <!--左边-->
          <div></div>
          <!--右边-->
        </div>
    </section>
    <!--案例展示结束-->



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
import topModule from "../components/topModule.vue";
import navigationBar from "../components/navigationBar.vue";
import footerNavigation from "../components/footerNavigation.vue";
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

.case-list1main{
  width: 100%;
  display: flex;
  border-bottom: 1px solid #d5d3d3;
}
.case-list1{
  padding: 50px 70px;
  display: flex;
  flex-direction: row;
  background: #f3f3f3;
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
.case-lun{
    width: 100%;
    height: 550px;
    display: flex;
}
.case-lun img{
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