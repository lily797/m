<template>
  <div class="guanli" style="width:100%">
    <el-container>
      <!-- <div class="header_bread"> -->
        <el-header class="header_bread">
          <el-breadcrumb  separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
            <el-breadcrumb-item>活动管理</el-breadcrumb-item>
          </el-breadcrumb>
        </el-header>
      <!-- </div> -->
      
      <el-container>
        <el-aside style="160px">
          <small-menu></small-menu>
        </el-aside>
        <el-main>
          <router-view></router-view>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>

<script>
import smallMenu from '../../components/common/smallmenu.vue'
export default {
  components:{
    'small-menu':smallMenu
  }
}
</script>

<style lang="less" scoped>
  .guanli {
    width: 100%;
    background: rgba(242, 242, 242, 1);
    .header_bread {
      background-color: rgb(250, 250, 250);
      height: 34px!important;
      color: #333;
      font-style: normal;
      display: flex;
      align-items: center;
    }
  }
  .el-aside {
    width:160px!important;
  }
  .el-main {
    padding: 0;
  }
  .el-breadcrumb {
    font-size: 12px;
  }
</style>