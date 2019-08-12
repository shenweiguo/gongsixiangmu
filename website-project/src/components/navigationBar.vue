<template>
  <div class="main">
    <div class="nav_main">
      <span>关于我们</span>
      <span>产品中心</span>
      <span>解决方案</span>
      <span>服务支持</span>
      <span>联系我们</span>
      <span>加入联腾</span>
      <span>
          <div class="demo-input-suffix">
        <el-input size="mini" placeholder="请输入内容" prefix-icon="el-icon-search" v-model="input1"></el-input>
          </div>
      </span>
    </div>
  </div>
  <!--所有内容-->
</template>

<script>
export default {
  data() {
    return {
      input1: ""
    };
  }
};
</script>




<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: row;
}
.nav_main {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  height: 47px;
  background: #181717;
}
.nav_main span {
  flex: 0.1;
  color: #ffffff;
  font-size: 14px;
  line-height: 47px;
  font-weight: bold;
}
.nav_main span:last-child{
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
