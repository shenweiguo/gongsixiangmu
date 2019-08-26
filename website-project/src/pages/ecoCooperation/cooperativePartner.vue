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
    <section class="down-lun">
      <img src="../../assets/images/ecoCooperation/ec_1.jpg" alt />
    </section>
    <!--图片结束-->

    <section class="great-title">
      <span>
        <img src="../../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>合作伙伴分布</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->
    <section class="cooper-main">
      <div class="cooper-mimg">
        <img src="../../assets/images/ecoCooperation/ec_2.jpg" alt />
      </div>
    </section>
    <!--图片结束-->

    <section class="cooper-listm">
      <div class="cooper-tLeft">
        <span>
          <span class="cooper-tLefts1">代理合作</span>
        </span>
        <span
          class="cooper-tLefts2"
        >栉风沐雨，砥砺前行，宏正道科技专注于大政法领域信息化产品和服务，在全国范围内构建市场营销网络，大力发展合作伙伴，打造生态合作模式，构建基于宏正道产品和解决方案的市场实践和用户体验，本着“合作包容 携手共进”的理念，我们坚持开放市场和客户资源，与合作伙伴一道开发区域市场，为中国大政法行业信息化建设贡献一份力量。</span>
        <span class="cooper-tLefts3m">
          <span class="cooper-tLefts3"> <router-link :to="{path:'/agencyCooperation'}">了解更多</router-link> </span>
        </span>
      </div>
      <!--左边-->
      <div class="cooper-tLeft">
        <span>
          <span class="cooper-tLefts1">渠道合作</span>
        </span>
        <span
          class="cooper-tLefts2"
        >宏正道科技专注于大政法领域信息化产品和服务，在全国范围内构建市场营销网络，大力发展项目渠道合作伙伴。宏正道拥有经验丰富的研发团队和项目实施团队，可以为合作伙伴提供强大的全方位支撑，根据项目的不同特点，从售前技术支持到项目具体实施，直至竣工交付和售后服务，我们可以提供专业定制化方案。宏正道是值得信赖的合作伙伴。</span>
        <span class="cooper-tLefts3m">
          <span class="cooper-tLefts3">  <router-link :to="{path:'/channelCooperation'}">了解更多</router-link></span>
        </span>
      </div>
      <!--左边-->
    </section>

    <div style="height:100px;"></div>

    <section class="cooper-mailbox">
      <span class="cooper-mailboxm">
        联系邮箱：gulinxing@sz-led.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        联系电话：18948785812 0755-29031666
      </span>
    </section>

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
.main {
  background: #f7f7f7;
}
.cooper-mailboxm{
    width:65%;
    display: flex;
    flex-direction: row;
    line-height: 40px;
    font-weight: bold;
}
.cooper-mailbox {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.cooper-tLefts3m {
  margin-top: 20px;
}
.cooper-tLefts3 {
  padding: 5px 21px;
  border: 1px solid #ff0000;
  color: #ff0000;
}
.cooper-tLefts3 a{
  color: #ff0000;
}
.cooper-tLefts2 {
  display: flex;
  margin-top: 40px;
  color: #141011;
  font-weight: bold;
  font-size: 15px;
  line-height: 25px;
}
.cooper-tLefts1 {
  border-bottom: 1px solid #a6a6a6;
  padding-bottom: 10px;
  font-weight: bold;
  font-size: 20px;
  color: #201c1d;
}
.cooper-tLeft {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 30%;
  box-shadow: darkgrey 0px 0px 7px 1px;
  padding: 50px 50px 25px 50px;
  margin-left: 20px;
}
.cooper-listm {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 200px;
}
.cooper-mimg {
  width: 1024px;
  height: 656px;
  display: flex;
}
.cooper-mimg img {
  width: 100%;
  height: 100%;
}
.cooper-main {
  display: flex;
  flex-direction: row;
  justify-content: center;
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
.down-lun {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 550px;
}
.down-lun img {
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