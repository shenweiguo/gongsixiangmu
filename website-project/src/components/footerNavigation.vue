<template>
  <div class="main">
    <footer class="footer_main">
      <div class="footer_top">
        <ul class="footer_topu">
          <li>
            <router-link :to="{path:'/aboutUs'}">关于我们</router-link>
          </li>
          <li>企业简介</li>
          <li>公司愿景</li>
          <li>董事长致辞</li>
        </ul>

        <ul class="footer_topu">
          <li>服务支持</li>
          <li>
            <router-link :to="{path:'/downloadZone'}">下载专区</router-link>
          </li>
          <li>
            <router-link :to="{path:'/saleService'}">售后服务</router-link>
          </li>
          <li>
            <router-link :to="{path:'/commonProblem'}">常见问题问答</router-link>
          </li>
        </ul>

        <ul class="footer_topu">
          <li>生态合作</li>
          <li>代理商合作</li>
          <li>渠道商加盟</li>
        </ul>
        <ul class="footer_topu">
          <li>加入联腾</li>
          <li>招贤纳士</li>
          <li>联系我们</li>
        </ul>

        <ul class="footer_topu">
          <li>全国营销网络</li>
          <li class="footer_topui">
            <img src="../assets/images/shouye/h_13.jpg" alt />
          </li>
        </ul>
      </div>
      <!--底部上面内容-->
      <div class="footer_bottom">客服电话：400-889-8066</div>
      <!--底部下面内容-->
      <div class="footer_input">
        <el-input style="width:10%;"></el-input>
      </div>
      <!--底部输入框内容-->
    </footer>
    <!--底部导航-->
  </div>
  <!--所有内容-->
</template>

<script>
export default {};
</script>


<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.footer_main {
  width: 100%;
  display: flex;
  height: 442px;
  background: #0f1e39;
  flex-direction: column;
  color: #ffffff;
  justify-content: center;
}
.footer_top {
  display: flex;
  flex-direction: row;
  justify-content: center;
}
.footer_topu {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: left;
  width: 12%;
}
.footer_topu li:first-child {
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 18px;
}
.footer_topu li:first-child a {
  color: #ffffff;
}
.footer_topu li:nth-child(n + 2) {
  color: #8b91a1;
  font-size: 14px;
  line-height: 23px;
}
.footer_topu li:nth-child(n + 2) a {
  color: #8b91a1;
}
.footer_top .footer_topu:last-child {
  text-align: center;
  width: 16%;
}
.footer_bottom {
  display: flex;
  flex-direction: row;
  font-weight: bold;
  padding-left: 5%;
  border-bottom: 2px solid #5e6471;
  line-height: 50px;
  font-size: 18px;
}
.footer_input {
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: flex-end;
  text-align: right;
  align-items: center;
  margin-top: 10px;
}
</style>
