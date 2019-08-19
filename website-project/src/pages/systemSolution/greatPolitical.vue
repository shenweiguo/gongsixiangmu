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
    <section class="great-lun">
      <img src="../../assets/images/solution/so_1.jpg" alt />
    </section>
    <!--图片结束-->
    <section class="great-title">
      <span>
        <img src="../../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>大政法办案中心解决方案</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->
    <section class="great-list1">
      <span>大政法智能办案中心系统本着“规范办案、方便基层、提高效率，保证安全”的设计原则，采用了人员基础信息采集、AI智能分析比对、大数据、物联网等技术，以流程化管理为主线，以执法证据数据化管理为基础，以提高执法效能，规范执法过程，减轻民警负担为目的。最终实现执法过程完全规范化、精细化，执法环节可全程追踪回溯，执法信息可检索查询，案件审理全程闭环。创建了执法行为可监督，办案过程更便捷的智能化执法办案与执法监督的新模式。实现了对人员、警情、案件、财物、场所五要素进行集中式、闭环式全流程的监督管理。为科学化、信息化、智能化办案开辟了一条新路。</span>
    </section>
    <!--列表结束-->
    <section class="great-title1">
        系统架构
    </section>
    <!--标题结束-->
    <section class="great-framework">
        <div class="great-frameworki"><img src="../../assets/images/solution/so_4.jpg" alt=""></div>
    </section>

    <div style="height:100px;"></div>

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
};
</script>


<style scoped>
.great-frameworki{
    width: 100%;
    height: 600px;
}
.great-frameworki img{
    width: 100%;
    height: 100%;
}
.great-framework{
   display: flex;
   flex-direction: row;
   padding: 0 90px;
}
.great-title1 {
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
.great-list1 {
  padding: 0 10%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.great-list1 span:nth-child(1) {
  text-align: left;
  font-size: 16px;
  color: #1b1717;
  line-height: 27px;
  text-indent: 2rem;
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
.main {
  background: #f7f7f7;
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
.great-lun {
  width: 100%;
  height: 500px;
  display: flex;
}
.great-lun img {
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
