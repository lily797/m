<template>
  <div class="report-data">
      <el-row type="flex"  align="middle">
            <el-col :span="10" style="padding-left:24px">
                <div class="grid-content bg-purple">
                    <span>报告名称：</span>
                    <el-input style="width:150px;height:30px!important" placeholder="请输入关键词"></el-input>
                </div>
            </el-col>
            <el-col :span="14">
                <div class="grid-content bg-purple-light">
                    <span>日期：</span>
                       <el-date-picker
                        v-model="value1"
                        type="date"
                        placeholder="年 / 月 / 日">
                        </el-date-picker>
                        <span style="padding:0 10px"> 一 </span>
                        <el-date-picker
                        v-model="value2"
                        type="date"
                        placeholder="年 / 月 / 日">
                        </el-date-picker>
                </div>
            </el-col>
      </el-row>
  </div>
</template>

<script>
export default {
    data(){
        return {
            value1:'',
            value2:''
        }
    }
}
</script>

<style scoped lang="less">
   
// /deep/ .el-input__inner {
//         height: 30px;
//     }
    .report-data {
        height: 53px;
        line-height: 50px;
        background-color: rgba(255, 255, 255, 1);
        border-bottom: 1px solid rgba(228, 228, 228, 1);
        // background: pink;
        font-size: 13px;
        color: #333;
        font-family: 'Arial Normal', 'Arial';
        .el-button {
            width: 63px;
            height: 29px;
            line-height: 6px;
            border:1px solid #DCDFE6;
            background: inherit;
            background-color: rgba(14, 175, 192, 1);
            color: #fff;
            font-size: 12px;
            font-weight: 400;
            border: none;
            border-radius: 5px;
            border-top: none;
        }
        .el-input {
            width: 150px;
            height: 30px!important;
            padding: 3px 2px 3px 2px;
            font-family: 'Arial Normal', 'Arial';
            font-weight: 400;
            font-style: normal;
            font-size: 13px;
            text-decoration: none;
            letter-spacing: normal;
            color: #000000;
            vertical-align: none;
            text-align: left;
            text-transform: none;
            background-color: transparent;
            border-color: transparent;
        }
        /deep/ .el-input__inner {
            width: 150px;
            height: 30px;
            line-height: 30px;
        }
        /deep/ .el-picker-panel__body{
            width:100px;
            height: 100px;
        }
    }

</style>
<style lang="less">
      .el-date-picker {
          width: 220px;
          height: 260px;
          margin: 0 auto;
      }
      .el-picker-panel__body{
            width:220px;
            height: 200px;
        }
        .el-date-picker__header {
            font-size:12px;
            margin: 4px;
        }
         .el-date-picker__header-label {
                font-size: 12px;
                
            }
      .el-picker-panel__content {
          height: 80px;
          margin: 0;
          .el-date-table {
                width: 200px;
            height:80px;
            margin: 0;
          }
          table {
             width: 220px;
            height:80px;
            margin: 0;
            padding-left: 12px;
            td {
                height: 10px;
                // width: 10px;
                padding:0;
            }
          }
          .el-picker-panel {
              color: #000000;
              margin-left: 10px;
          }
          .el-date-table td.next-month, .el-date-table td.prev-month  {
              color: rgb(153, 153, 153);
          }
      }
</style>