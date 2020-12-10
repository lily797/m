<template>
  <div class="smallmenu">
      <el-menu
        default-active="2"
        class="el-menu-vertical-demo"
        @open="handleOpen"
        @close="handleClose">
        <el-submenu index="1">
          <template slot="title">
            <!-- <i class="el-icon-location"></i> -->
            <span>导航一</span>
          </template>
            <el-menu-item index="1">
              <i class="el-icon-menu"></i>
              <span slot="title">选项1</span>
            </el-menu-item>
            <el-menu-item index="2">
              <i class="el-icon-menu"></i>
              <span slot="title">选项2</span>
            </el-menu-item>
        </el-submenu>
        <el-menu-item index="3">
          <i class="el-icon-menu"></i>
          <span slot="title">导航二</span>
        </el-menu-item>
        <el-menu-item index="4">
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
   }
</style>