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
    <section class="collection-title">
        人员基础信息采集管理系统
    </section>
    <!--标题结束-->
    <section class="collection-list">
        <span>人员基础信息采集管理系统是犯罪实时控制和立体化社会治安防控系统建设的一个重要组成部分，系统能够完成公安机关侦查破案、打击犯罪和治安管理所涉及的各类人员的基础信息采集、归纳整理、分类复用和数据分发等业务工作。</span>
        <span>人员基础信息采集是公安机关信息化建设的基础和前提之一，采集系统是大警综系统的重要组成部分。信息采集工作的规范化、标准化程度是衡量公安机关整体办案能力和信息化建设水平的重要标志之一。
</span>
    </section>
    <!--采集管理详情-->


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
}
</script>


<style scoped>
.collection-list
.collection-list{
    display: flex;
    flex-direction: column;
    padding: 0 200px;
    text-align: left;
}
.collection-title{
    width: 100%;
    display: flex;
    flex-direction: row;
    justify-content: center;
    padding-top: 100px;
    padding-bottom: 70px;
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
</style>
