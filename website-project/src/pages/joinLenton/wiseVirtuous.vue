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
    <section class="wise-lun">
        <img src="../../assets/images/joinLenton/jo_1.jpg" alt="">
    </section>

    <section class="great-title">
      <span>
        <img src="../../assets/images/solution/so_2.jpg" alt />
      </span>
      <span>招贤纳士</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->
    <section class="wise-tablemain">
      <table cellpadding="0" cellspacing="0" class="wise-table">
        <tr>
          <th>职位名称</th>
          <th>招聘人数</th>
          <th>发布时间</th>
          <th>职位需求</th>
        </tr>
        <tr>
          <td>软件开发工程师</td>
          <td>2名</td>
          <td>20190808</td>
          <td> <router-link :to="{path:'/resumePresentation'}">查看详情</router-link> </td>
        </tr>
        <tr>
          <td>Java程序员</td>
          <td>2名</td>
          <td>20190808</td>
          <td>查看详情</td>
        </tr>
        <tr>
          <td>C#程序员</td>
          <td>2名</td>
          <td>20190808</td>
          <td>查看详情</td>
        </tr>
        <tr>
          <td>结构工程师</td>
          <td>2名</td>
          <td>20190808</td>
          <td>查看详情</td>
        </tr>
        <tr>
          <td>系统集成工程师</td>
          <td>2名</td>
          <td>20190808</td>
          <td>查看详情</td>
        </tr>
      </table>
    </section>
    <!--表格结束-->

    <div style="height:120px"></div>

    <section class="cooper-mailbox">
      <span class="cooper-mailboxm">
        简历提交邮箱：gulinxing@sz-led.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
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
.cooper-mailboxm {
  width: 70%;
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
.wise-lun {
  width: 100%;
  height: 550px;
  display: flex;
}
.wise-lun img {
  width: 100%;
  height: 100%;
}
.wise-table tr td {
  border-bottom: 1px solid #7f7f7f;
  line-height: 50px;
  border-right: 1px solid #7f7f7f;
  font-size: 14px;
}
.wise-table tr th {
  line-height: 50px;
  border-bottom: 1px solid #7f7f7f;
  border-top: 1px solid #7f7f7f;
  border-right: 1px solid #7f7f7f;
}
.wise-table tr th:last-child {
  border-right: 0px;
}
.wise-table tr td:last-child {
  border-right: 0px;
  color: #ff3637;
}
.wise-table tr td:last-child a {
  border-right: 0px;
  color: #ff3637;
}
.wise-table {
  width: 70%;
}
.wise-tablemain {
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