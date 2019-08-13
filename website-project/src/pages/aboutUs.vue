<template>
  <div class="main">
    <!--头部内容-->
    <header class="homeHerder">
      <top-module></top-module>
    </header>
    <nav class="home-nav">
      <navigation-bar></navigation-bar>
    </nav>
    <!--导航条-->
    <section class="">

    </section>



    <div style="height:200px;">

    </div>

    <!--底部导航-->
    <footer class="home-footer">
      <footer-navigation></footer-navigation>
    </footer>
    <!--底部导航-->
  </div>
</template>

<script>
import topModule from "../components/topModule";
import navigationBar from "../components/navigationBar.vue";
import footerNavigation from "../components/footerNavigation.vue";

export default {
  data() {
    return {};
  },
  //模板
  components: {
    topModule,
    navigationBar,
    footerNavigation
  }
};
</script>

<style lang="scss" scoped>
.main {
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
}
</style>