<template>
  <div class="main">
    <div class="nav_main">
      <span>
        <router-link :to="{path:'/aboutUs'}">关于我们</router-link>
      </span>
      <span>
        <router-link :to="{path:'/productCenterMain'}">产品中心</router-link>
      </span>
      <span>
        <router-link :to="{path:'/greatPolitical'}">解决方案</router-link>
      </span>
      <span>
        <router-link :to="{path:'/casePresentation'}">案例展示</router-link>
      </span>
      <span>
        <el-dropdown>
          <span class="el-dropdown-link">
            服务支持
            <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link :to="{path:'/downloadZone'}">下载专区</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="{path:'/saleService'}">售后服务</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="{path:'/commonProblem'}">常见问题解答</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span>
        <el-dropdown>
          <span class="el-dropdown-link">
            <router-link :to="{path:'/cooperativePartner'}">生态合作</router-link>
            <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link :to="{path:'/agencyCooperation'}">代理商合作</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="{path:'/channelCooperation'}">渠道商合作</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
      <span>
        <el-dropdown>
          <span class="el-dropdown-link">
            加入联腾
            <!-- <i class="el-icon-arrow-down el-icon--right"></i> -->
          </span>
          <el-dropdown-menu slot="dropdown">
            <el-dropdown-item>
              <router-link :to="{path:'/wiseVirtuous'}">招贤纳士</router-link>
            </el-dropdown-item>
            <el-dropdown-item>
              <router-link :to="{path:'/contactUs'}">联系我们</router-link>
            </el-dropdown-item>
          </el-dropdown-menu>
        </el-dropdown>
      </span>
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
.nav_main span a {
  color: #ffffff;
}
.nav_main span:last-child {
  display: flex;
  flex-direction: row;
  align-items: center;
}
</style>
