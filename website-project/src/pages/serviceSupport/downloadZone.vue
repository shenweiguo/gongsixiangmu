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
      <span>下载专区</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->

    <section class="down-table">
      <table cellpadding="0" cellspacing="0">
        <tr>
          <th>文件名称</th>
          <th>版本信息</th>
          <th>下载</th>
        </tr>
        <tr>
          <td>人员基础信息一体化采集设备技术规格书</td>
          <td>V1.2</td>
          <td>
            <span class="down-tablei">
              <img src="../../assets/images/serviceSupport/se_2.jpg" alt />
            </span>
          </td>
        </tr>
        <tr>
          <td>人员基础信息采集管理系统规格书</td>
          <td>V1.0</td>
          <td>
            <span class="down-tablei">
              <img src="../../assets/images/serviceSupport/se_2.jpg" alt />
            </span>
          </td>
        </tr>
        <tr>
          <td>阵列传声器规格书</td>
          <td>V1.0</td>
          <td>
            <span class="down-tablei">
              <img src="../../assets/images/serviceSupport/se_2.jpg" alt />
            </span>
          </td>
        </tr>
        <tr>
          <td>正道智能语音识别系统规格书</td>
          <td>V1.0</td>
          <td>
            <span class="down-tablei">
              <img src="../../assets/images/serviceSupport/se_2.jpg" alt />
            </span>
          </td>
        </tr>
        <tr>
          <td>正道智慧审讯助手规格书</td>
          <td>V1.0</td>
          <td>
            <span class="down-tablei">
              <img src="../../assets/images/serviceSupport/se_2.jpg" alt />
            </span>
          </td>
        </tr>
      </table>

      <!--包裹内容-->
    </section>
    <!--下载专区表格-->
    <div style="height:50px;"></div>

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
.down-table tr:first-child {
  color: #ffffff;
  background: #01b0f1;
  line-height: 60px;
}
.down-table tr:first-child td {
  padding: 20px 0;
  display: flex;
}
.down-tablei {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.down-tablei img {
  /* width: 100%;
    height: 100%; */
}
.down-table table {
  width: 100%;
}
.down-table table td {
  width: 20%;
  border-bottom: 1px solid #979797;
  border-right: 1px solid #979797;
  /* border-top: 1px solid #979797; */
  line-height: 70px;
}
.down-table table td:last-child{
    border-right: 0px;
}
.down-table {
  display: flex;
  flex-direction: row;
  padding: 0 200px;
  justify-content: center;
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