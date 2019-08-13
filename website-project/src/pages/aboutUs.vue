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
    <section class="aboutus_img">
      <img src="../assets/images/aboutUs/ab_l.jpg" alt />
    </section>
    <!--图片结束-->
    <section class="aboutus_Title">
      <img src="../assets/images/aboutUs/ab_g1.jpg" alt />
    </section>
    <!--公司简介结束-->
    <section class="aboutus_details">
      <span>深圳市宏正道科技有限公司是一家以智能公共安全信息化产品、信息化软硬件研发以及信息化工程服务为主营业务的国家级高新技术企业，凭借优质的产品和精准的服务，宏正道多次参与国家级大型项目和活动，并多次获得荣誉和表彰。</span>
      <span>宏正道专注于执法办案领域里的智能信息化产品的研发和制造，先后参与公安部“人员基础信息一体化采集设备”研制大纲的编制以及标准的起草，该设备于2016年获公安部批准列装，列装型号为PJS012。“人员基础信息采集管理系统”、“正道智能语音识别系统”、“正道智能语义理解系统”和“正道智慧审讯助手”等智能化产品推向大政法市场后，迅速得到广大用户的认可和支持。秉持“追求卓越 持续创新”的理念，未来向着更高的目标 迈进。</span>
      <span>2018年9月，腾讯云与宏正道科技签订了大政法领域人工智能战略合作框架协议书。根据合作协议书，双方将在大政法领域全方面开展合作，重点运用腾讯智能语音识别技术和语义理解技术服务大政法机关，共同推动智能语音识别语义理解、计算机视觉、热力图、智慧微警务、三维可视化展示等云计算、大数据、人工智能技术在大政法领域的落地。</span>
      <span>腾讯云致力于打造最高质量、最值得信赖的AI和云服务平台，在人工智能算法方面，腾讯一直处于国内乃至世界范围内的领先地位。腾讯云与宏正道在大政法人工智能领域的全面合作，为进一步推动人工智能技术在大政法行业的应用，贡献专业技术能力。宏正道科技在大数据领域、云计算方面与腾讯云建立合作，成为腾讯公安领域战略合作伙伴，发挥创新设计能力、共同开发智能执法办案系统。</span>
    </section>
    <section class="aboutus_Title">
      <img src="../assets/images/aboutUs/ab_g2.jpg" alt />
    </section>
    <!--公司愿景结束-->
    <aside class="aboutus_list">
      <div class="aboutus_l1">
        <span>
          <img src="../assets/images/aboutUs/ab_g4.jpg" alt />
        </span>
        <span>愿景</span>
        <span>立足于大政法信息化行业，成为资本市场科技类公众公司。管理规范的国家级高新科技公司。有狼性有激情不断创新的公司。</span>
      </div>
      <!--第一个结束-->
      <div class="aboutus_l1">
        <span>
          <img src="../assets/images/aboutUs/ab_g5.jpg" alt />
        </span>
        <span>使命</span>
        <span>立足于大政法信息化行业，成为资本市场科技类公众公司。管理规范的国家级高新科技公司。有狼性有激情不断创新的公司。</span>
      </div>
      <!--第一个结束-->
      <div class="aboutus_l1">
        <span>
          <img src="../assets/images/aboutUs/ab_g6.jpg" alt />
        </span>
        <span>核心价值观</span>
        <span>立足于大政法信息化行业，成为资本市场科技类公众公司。管理规范的国家级高新科技公司。有狼性有激情不断创新的公司。</span>
      </div>
      <!--第一个结束-->
      <div class="aboutus_l1">
        <span>
          <img src="../assets/images/aboutUs/ab_g7.jpg" alt />
        </span>
        <span>核心理念</span>
        <span>立足于大政法信息化行业，成为资本市场科技类公众公司。管理规范的国家级高新科技公司。有狼性有激情不断创新的公司。</span>
      </div>
      <!--第一个结束-->
    </aside>
    <!--公司愿景列表结束-->

    <div style="height:200px;"></div>

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

<style  scoped>
.aboutus_l1 {
  display: flex;
  flex-direction: column;
  width: 20%;
}
.aboutus_list {
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f7f7f7;
}
.aboutus_details {
  display: flex;
  flex-direction: column;
  background: #f7f7f7;
  padding: 0 200px;
  text-align: left;
}
.aboutus_details span {
  padding-top: 5px;
  text-indent: 30px;
  line-height: 30px;
}
.aboutus_details span:nth-child(3) {
  padding-top: 15px;
}
.aboutus_details span:nth-child(4) {
  padding-top: 15px;
}
.aboutus_Title {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  background: #f7f7f7;
  padding-top: 126px;
  padding-bottom: 75px;
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
.aboutus_img {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 487px;
}
.aboutus_img img {
  width: 100%;
  height: 100%;
}
</style>