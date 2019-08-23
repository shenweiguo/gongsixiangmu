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
      <img src="../../assets/images/joinLenton/jo_1.jpg" alt />
    </section>
    <!--图片结束-->

    <section class="resume-list1">
      <div class="resume-tielm">
        <span class="resume-tielms1">软件开发工程师</span>
        <div class="resume-tielmdm" style="margin-top:20px;">
          <span>职位类别：研发</span>
          <span>工作地点： 广东省深圳市</span>
          <span>招聘人数： 2人</span>
        </div>
        <div class="resume-tielmdm">
          <span>工作年限： 1年及以上</span>
          <span>最低学历： 本科及以上</span>
          <span>发布时间： 2019-07-27</span>
        </div>
      </div>
    </section>
    <!--标题结束-->

    <section class="resume-describe">
      <div class="resume-describem">
        <span class="resume-describem1">职位描述：</span>
        <ol type="1" start="1">
          <li>1. 遵循公司相关技术标准、规范，高质量完成设计、开发任务；</li>
          <li>2. 参与系统需求分析和详细设计工作；</li>
          <li>3. 参与项目详细设计文档、部署文档、需求文档等相关文档的编写，建立完整的项目档案；</li>
          <li>4. 协助完成项目测试、系统上线工作，对项目实施提供支持；</li>
          <li>5. 参与方案讨论和技术调研等工作</li>
        </ol>
      </div>
    </section>
    <!--职位描述-->

    <section class="resume-describe">
      <div class="resume-describem">
        <span class="resume-describem1">职位资格：</span>
        <ol type="1" start="1">
          <li>1. 本科及以上学历，计算机相关专业，1年以上软件开发经验。</li>
          <li>2. 熟练掌握C/C++，对C++及面向对象思想有较深的理解。</li>
          <li>3. 熟练掌握多线程编程、通信编程等技能。</li>
          <li>4. 良好的数学功底，熟悉操作系统、数据结构、软件工程、计算机原理等相关专业知识。</li>
          <li>5. 独立自主的工作能力和解决问题的能力。</li>
        </ol>
      </div>
    </section>
    <!--职位资格-->

    <div style="height:100px;"></div>



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
.resume-describem1 {
  color: #080808;
  font-size: 18px;
  font-weight: bold;
}
.resume-describem {
  margin-top: 50px;
  width: 70%;
  display: flex;
  flex-direction: column;
  text-align: left;
  border: 1px solid #22233f;
  border-radius: 20px;
  padding: 20px 40px;
}
.resume-describem ol li {
  line-height: 30px;
  text-indent: 1px;
}
.resume-describem ol {
  margin-top: 10px;
}
.resume-describe {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.resume-tielmdm {
  display: flex;
  flex-direction: row;
  width: 100%;
  line-height: 40px;
  /* font-weight: bold; */
  text-indent: 1rem;
  font-size: 16px;
  color: #030303;
}
.resume-tielmdm span {
  flex: 1;
}
.resume-tielms1 {
  font-size: 30px;
  font-weight: bold;
  color: #fd0000;
}
.resume-tielm {
  display: flex;
  flex-direction: column;
  width: 70%;
  /* background: red; */
  text-align: left;
}
.resume-list1 {
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 200px;
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