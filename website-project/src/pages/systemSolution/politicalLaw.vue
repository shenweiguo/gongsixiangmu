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
}
</script>



<style scoped>
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