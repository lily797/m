<template>
  <div class="search">
      <el-row type="flex" justify="space-between" align="middle">
            <el-col :span="4" :offset="1"><div class="grid-content bg-purple">筛选查询</div></el-col>
            <el-col :span="4">
                <div class="grid-content bg-purple-light">
                    <el-button style="width:68px" >创建报告</el-button>
                    <el-button >批量删除</el-button>
                </div>
            </el-col>
      </el-row>
  </div>
</template>

<script>
export default {

}
</script>

<style scoped lang="less">
    .search {
        height: 50px;
        line-height: 50px;
        background-color: rgba(243, 243, 243, 1);
        border-bottom: 1px solid rgba(228, 228, 228, 1);
        // background: pink;
        font-size: 13px;
        color: #333;
        font-family: 'Arial Normal', 'Arial';
        .el-button {
            width: 68px;
            height: 29px;
            text-align: center;
            line-height: 6px;
            border:1px solid #DCDFE6;
            background: inherit;
            background-color: rgba(14, 175, 192, 1);
            color: #fff;
            font-size: 12px;
            font-weight: 400;
            border: none;
            border-radius: 5px;
            padding: 0;
        }
    }

</style>