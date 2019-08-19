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
    <section class="interror-lun">
      <img src="../../../assets/images/productCenter/pr_16.jpg" alt />
    </section>
    <!--图片结束-->
    <section class="interror-title">正道智慧审讯助手</section>
    <!--正道标题结束-->
    <section class="interror-List">
      <span>针对大政法行业实际应用场景，宏正道研发的智慧审讯助手能够辅助完成执法办案讯询问业务工作，大大降低办案人员的工作量。系统组成包括接入层、引擎层和应用层。引擎层主要包括：语音识别模型、语义理解模型及相应引擎、人体（包括人脸）检测模型和引擎，专为执法办案场景提供的定制化功能等。</span>
      <span>接入层主要包括实时音频流接入、录音录像文件接入及相关的功能设置；引擎层主要包括：腾讯云语音引擎（ASR）、语义理解引擎（NLP）和优图引擎等；应用层主要包括讯询问笔录、智慧审讯助手等应用软件。解决方案架构清晰，易于扩展，随着业务的不断应用，能够连续收集训练数据，不断进行模型优化，最大化发挥智能语音识别、语义理解和情绪表情分析在执法办案业务中的应用。</span>
    </section>
    <!--正道列表结束-->
    <section class="interror-title">主要功能</section>
    <!--主要功能标题结束-->
    <section class="interror-function">
      <div class="interror-functioni"><img src="../../../assets/images/productCenter/pr_17.jpg" alt=""></div>
    </section>
    <!--主要功能图-->
    <section class="interror-title">工作流程</section>
    <!--主要功能标题结束-->
    <section class="interror-process">
      <div class="interror-processi"><img src="../../../assets/images/productCenter/pr_18.jpg" alt=""></div>
    </section>
    <!--工作流程图结束-->
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
.interror-processi{
  width: 100%;
  height: 700px;
}
.interror-processi img{
  width: 100%;
  height: 100%;
}
.interror-process{
  display: flex;
  flex-direction: row;
  justify-content: center;
  padding: 0 100px;
}
.interror-functioni{
  width: 100%;
  height: 500px;
}
.interror-functioni img{
  width: 100%;
  height: 100%;
}
.main{
  background: #f7f7f7;
}
.interror-function{
  display: flex;
  flex-direction: row;
  /* width: 100%; */
  padding: 0 300px;
  justify-content: center;
}
.interror-List{
padding: 0 10%;
  justify-content: center;
  display: flex;
  flex-direction: column;
}
.interror-List span:nth-child(1){
  text-align: left;
  font-size: 16px;
  color: #1b1717;
  line-height: 30px;
  text-indent: 2rem;
}
.interror-List span:nth-child(2){
  text-align: left;
  font-size: 16px;
  color: #1b1717;
  line-height: 30px;
  text-indent: 2rem;
  margin-top: 10px;
}
.interror-title {
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
.interror-lun {
  width: 100%;
  height: 550px;
  display: flex;
  flex-direction: row;
}
.interror-lun img {
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
