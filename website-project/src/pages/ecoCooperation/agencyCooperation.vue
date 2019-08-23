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
      <span>代理合作</span>
      <span>
        <img src="../../assets/images/solution/so_3.jpg" alt />
      </span>
    </section>
    <!--标题结束-->
    <section class="angency-list">
      <span>宏正道专注于执法办案领域里的智能信息化产品的研发和制造，先后参与公安部“人员基础信息一体化采集设备”研制大纲的编制以及标准的起草，该设备于2016年获公安部批准列装，列装型号为PJS012。“人员基础信息采集管理系统”、“正道智能语音识别系统”、“正道智能语义理解系统”和“正道智慧审讯助手”等智能化产品推向大政法市场后，迅速得到广大用户的认可和支持。 2018年9月腾讯云与宏正道科技签订了大政法领域人工智能战略合作框架协议书。根据合作协议书，双方将在大政法领域全方面开展合作，重点运用腾讯智能语音识别技术和语义理解技术服务大政法机关，共同推动智能语音识别语义理解、计算机视觉、热力图、智慧微警务、三维可视化展示等云计算、大数据、人工智能技术在大政法领域的落地。</span>
      <span>宏正道在全国范围内寻求有区域优势的市场合作伙伴。打造生态合作模式，取得市场共赢。我们通过整合的产品与应用资源，为客户提供定制化解决方案，为推进大政法行业信息化建设水平贡献一份力量！</span>
    </section>
    <!--详情结束-->

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
.angency-list span {
  text-indent: 2rem;
}
.angency-list {
  display: flex;
  flex-direction: column;
  padding: 0 20%;
  text-align: left;
  color: #373737;
  line-height: 30px;
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
.cooper-mailboxm {
  width: 65%;
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