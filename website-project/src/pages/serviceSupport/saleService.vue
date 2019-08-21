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
      <img src="../../assets/images/serviceSupport/se_1.jpg" alt />
    </section>
    <!--图片结束-->

    <section class="great-title">
      <span>
        <img src="../../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>售后服务机构分布</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->

    <section class="sale-mapMian">
      <span class="sale-mapMiani">
        <img src="../../assets/images/serviceSupport/se_3.jpg" alt />
      </span>
    </section>
    <!--地图结束-->
    <section class="great-title">
      <span>
        <img src="../../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>一键报修</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->

    <section class="sale-repairm">
      <div class="sale-repairmd">
        <span class="sale-repairmdi">
          <img src="../../assets/images/serviceSupport/se_4.jpg" alt />
        </span>
        <!--左边-->
        <span>宏正道出品的每台设备，机身都贴有ID二维码，透过手机扫描二维码，可以读取设备出厂信息和报修电子表单，并按维修单指引填写故障现象，通过微信一键提交宏正道售后，用户可以立即得到响应，随后就会有维修人员电话跟踪，用户可得维修工程师到通讯指导或登门维修服务。</span>
        <!--右边-->
      </div>
    </section>
    <!--一键报修-->

    <section class="great-title">
      <span>
        <img src="../../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>售后承诺</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->

    <section class="sale-promise">
      <ul class="sale-promiseul">
        <li>质保期：严守合同承诺条款，及时、到位并解决问题；</li>
        <li>
          实时响应，本市4小时内到达现场，省内外市10小时内到达现场，现场2小时判断故障解决问题，
          无法解决用同等器件替换，保证正常使用。
        </li>
        <li>重大任务，技术人员驻场进行值班式技术保障</li>
        <li>设立本地化维修中心：配备专业维修工程师</li>
        <li>宏正道服务平台： 400-889-8066 service@sz-led.com</li>
        <li>项目本地储备备品备件。</li>
        <li>质保期满后，仅收取零配件成本费。</li>
      </ul>
    </section>
    <!--售后承诺列表-->

    <div style="height:200px"></div>
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
.sale-promiseul {
  width: 50%;
}
.sale-promise ul li {
  list-style-type: disc;
  /* margin-top: 10px; */
  line-height: 30px;
}
.sale-promise {
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  text-align: left;
  justify-content: center;
  padding: 0 20px;
}
.sale-repairmd span:last-child {
  display: flex;
  flex-direction: row;
  line-height: 30px;
  font-size: 16px;
  color: #2e2c2d;
}
.sale-repairmdi {
  width: 539px;
  height: 144px;
  margin-right: 30px;
}
.sale-repairmdi img {
  width: 100%;
  height: 100%;
}

.sale-repairmd {
  display: flex;
  flex-direction: row;
  width: 50%;
  text-align: center;
  align-items: center;
  text-align: left;
}
.sale-repairm {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.sale-mapMiani {
  width: 900px;
  height: 700px;
}
.sale-mapMiani img {
  width: 100%;
  height: 100%;
}
.sale-mapMian {
  display: flex;
  flex-direction: row;
  justify-content: center;
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