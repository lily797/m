<template>
  <!-- <div> -->
    <div class="login">
      <img class="background" src="../../assets/images/login/u0.jpg">
      <div class="content">
        <img src="../../assets/images/login/u17.png" alt="">
        <div class="content_box">
          <div class="title">
            Mone Test
          </div>
          <!-- 表单部分 -->
          <el-form class="form_box" :model="form">
            <el-form-item>
              <el-input class="input_1" v-model="form.user" placeholder="请输入账号" >
                <i slot="prefix" class="el-input__icon el-icon-date"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-input class="input_1" v-model="form.password" placeholder="请输入密码" >
                <i slot="prefix" class="el-input__icon el-icon-date"></i>
              </el-input>
            </el-form-item>
            <el-form-item>
              <el-button class="sub" @click="onSubmit">登录</el-button>
            </el-form-item>
          </el-form>
        </div>
      </div>
    </div>
  <!-- </div> -->
</template>

<script>
export default {
    data(){
      return {
        form:{
          user: '',
          password: ''
        }
      }
    }
}
</script>

<style scope lang="less">
  .login {
    .background {
        border-width: 0px;
        position: absolute;
        left: 0px;
        top: 0px;
        width: 1530px;
        height: 678px;
        z-index: -999;
    }
    .content {
      img {
        width: 178px;
        height: 50px;
        position: absolute;
        left: 676px;
        top: 43px;
        z-index:1;
      }
      .content_box {
        border-width: 0px;
        position: absolute;
        left: 576px;
        top: 121px;
        width: 389px;
        height: 330px;
        background: inherit;
        background-color: rgba(17, 92, 161, 0.752941176470588);
        border: none;
        text-align: center;
        .title {
          width: 105px;
          height: 34px;
          display: flex;
          font-size: 20px;
          color: #FFFFFF;
          font-weight: 700;
          margin:10px auto;
        }
        .form_box {
          margin-top: 22px;
          .el-form-item__content {
              // position: absolute;
              // left: 15px;
              // top: 0px;
              width: 272px;
              height: 47px;       
              margin: 0 auto;
          }
          .el-input__inner {
              height: 47px;
              background: inherit;
              background-color: rgba(20, 88, 157, 1);
              box-sizing: border-box;
              border-width: 1px;
              border-style: solid;
              border-color: rgba(121, 121, 121, 1);
              border-radius: 3px;
              color: #FFFFFF;
          }
          input::placeholder {
            color: #fff;
            font-size: 10px;
            font-weight: 500;
            padding-left: 5px;
          }
          .sub {
            margin-top: 30px;
            width: 272px;
            height: 40px;
            background: inherit;
            background-color: rgba(58, 199, 247, 1);
            border: none;
            border-radius: 5px;
            color: #FFFFFF;
          }
        }
      }
    }
  }
</style>