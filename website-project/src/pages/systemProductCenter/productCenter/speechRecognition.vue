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
    <section class="speech-lun">
      <img src="../../../assets/images/productCenter/pr_13.jpg" alt />
    </section>
    <!--语音识图结束-->
    <section class="speech-title">正道智能语音识别系统</section>
    <!--标题结束-->
    <section class="speech-voicelist">
      <span>正道智能语音识别系统依托腾讯云语音识别（ASR）、语义理解（NLP）等核心引擎技术，能够对连续语音进行自动识别，实现了语音数据的实时内容识别，精准语音热词比对，语义理解提示分析，关键段落快速定位检索，编辑文本摘录和语音交互等核心业功能。系统能够对音频文件能够段落精准复核定位，关键词自定义词联网大数据比对检索反馈，方便使用人员迅速办理各种业务工作，如办公、路演、会议、讯询问、110指挥中心、。正道智能语音识系统极大提高了语音识别工作速度和准确率，能够使使用人员专注于实质核心业务工作。</span>
    </section>
    <!--列表结束-->

    <section class="speech-application">
      <img src="../../../assets/images/productCenter/pr_14.jpg" alt />
      <span class="speech-title1">应用行业</span>
      <div class="speech-list1">
        <span>大政法</span>
        <span>金融证券</span>
        <span>教育</span>
        <span>医疗</span>
        <span>交通</span>
      </div>
    </section>
    <!--应用行业结束-->
    <section class="speech-title">应用场景</section>
    <!--标题结束-->
    <section class="speech-scene">
      <div class="speech-scenei">
        <img src="../../../assets/images/productCenter/pr_15.jpg" alt />
      </div>
    </section>

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
};
</script>

<style scoped>
.main{
    background: #f7f7f7;
}
.speech-scenei {
    padding: 0 100px;
  width: 100%;
  height: 860px;
}
.speech-scenei img {
  width: 100%;
  height: 100%;
}
.speech-scene {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.speech-list1 {
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  color: #ffffff;
  bottom: 85px;
  font-size: 20px;
  font-weight: bold;
  padding: 0 4%;
}
.speech-list1 span {
  flex: 1;
}
.speech-title1 {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding-top: 70px;
  padding-bottom: 100px;
  font-weight: bold;
  font-size: 30px;
  color: #353232;
  position: absolute;
  color: #ffffff;
}
.speech-application {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 500px;
  margin-top: 100px;
  position: relative;
}
.speech-application img {
  width: 100%;
  height: 100%;
}
.speech-voicelist span:nth-child(1) {
  text-align: left;
  font-size: 16px;
  color: #1b1717;
  line-height: 27px;
  text-indent: 2rem;
}
.speech-voicelist {
  padding: 0 10%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.speech-title {
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
.speech-lun {
  width: 100%;
  height: 500px;
}
.speech-lun img {
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
