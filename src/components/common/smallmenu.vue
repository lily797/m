<template>
  <div class="smallmenu">
      <el-menu
        default-active="2"
        >
        <div class="el-menu-item item-title">
            <span>项目配置</span>
            <img src="../../assets/images/edit/u2688.svg" alt="">
        </div>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
        <el-menu
        default-active="2"
        >
        <div class="el-menu-item item-title">
            <span>项目配置</span>
            <img src="../../assets/images/edit/u2688.svg" alt="">
        </div>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>

        <el-menu
        default-active="2"
        router
        >
        <div class="el-menu-item item-title">
            <span>项目配置</span>
            <img src="../../assets/images/edit/u2688.svg" alt="">
        </div>
        <el-menu-item index="/guanli/testreport">
          <i class="el-icon-menu"></i>
          <span slot="title">测试报告</span>
        </el-menu-item>
        <el-menu-item index="/guanli/guanli1">
          <i class="el-icon-setting"></i>
          <span slot="title">导航四</span>
        </el-menu-item>
      </el-menu>
  </div>
</template>

<script>
// import layoutAside from '../../components/home/layout-aside.vue'
export default {
    // components:{
    //     'layout-aside':layoutAside
    // }
}
</script>

<style scoped lang="less">
   .smallmenu {
     width: 160px;
     height: 100vh;
     background-color: rgba(255, 255, 255, 1);
     .el-menu-item {
          width: 157px;
          height: 36px;
          background: inherit;
          background-color: rgba(255, 255, 255, 1);
          box-sizing: border-box;
          font-size: 12px;
          display: flex;
          align-items: center;
          border-bottom: 1px solid rgb(239,239,239);
          // color: #000080;
          img {
            font-family: 'Arial Normal', 'Arial';
            font-weight: 400;
            font-style: normal;
            font-size: 13px;
            letter-spacing: normal;
            color: #333333;
            vertical-align: none;
            text-align: center;
            line-height: normal;
            text-transform: none;
            transform:rotate(270deg);
          }
     }
     .item-title {
       display: flex;
       justify-content: space-between;
       color: #7f7f7f;
     }
   }
</style>