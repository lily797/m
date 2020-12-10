<template>
  <div class="home">
      <el-container>
          <el-aside style="background:rgba(0, 54, 134, 1);width:112px;" class="home-aside">
              <layout-aside></layout-aside>
          </el-aside>
          <el-container > 
              <router-view/>
          </el-container>
      </el-container>
  </div>
</template>

<script>
import layoutAside from '../../components/home/layout-aside.vue'
export default {
    components:{
        'layout-aside':layoutAside
    }
}
</script>

<style scoped lang="less">
    .home {
        .home-aside {
            width:112px;
            height: 100vh;
            background-color:rgba(0, 54, 134, 1) ;
        }
    }
</style>