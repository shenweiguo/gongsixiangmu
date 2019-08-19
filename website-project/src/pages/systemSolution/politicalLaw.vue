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
    <section class="polit-lun">
      <img src="../../assets/images/solution/so_6.jpg" alt="">
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
    <section class="great-title">
      <span>
        <img src="../../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>服务支持</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->

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
.polit-lun{
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: row;
}
.polit-lun img{
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

.great-title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding-top: 150px;
  padding-bottom: 100px;
}
.main {
  background: #f7f7f7;
}

</style>