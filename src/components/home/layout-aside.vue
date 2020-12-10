<template>
  <div class="aside">
      <div class="aside_title">
          <img src="../../assets/images/home/u463.png" alt="">
      </div>
      <div class="aside_menu">
          <div class="aside_menu_box" @click="gorouter" @mouseover="changemouse($event)" @mouseout="removemouse($event)">
              <img src="../../assets/images/home/u439.svg" alt="">
              <div class="aside_menu_text">管理员视角</div>
          </div>
           <div class="aside_menu_box" @click="gorouter2" @mouseover="changemouse($event)" @mouseout="removemouse($event)">
              <img src="../../assets/images/home/u439.svg" alt="">
              <div class="aside_menu_text">管理员视角</div>
          </div>
           <div class="aside_menu_box" @click="gorouter3" @mouseover="changemouse($event)" @mouseout="removemouse($event)">
              <img src="../../assets/images/home/u439.svg" alt="">
              <div class="aside_menu_text">管理员视角</div>
          </div>
      </div>
  </div>
</template>

<script>
export default {
    data(){
        return {

        }
    },
    methods:{
        changemouse($event){
            $event.currentTarget.style.backgroundColor = 'rgba(1,42,103,1)'
            // alert($event.currentTarget)
        },
        removemouse($event) {
            $event.currentTarget.style.backgroundColor = ''
        },
        gorouter(){
            this.$router.push('/shouye')
        },
        gorouter2(){
            this.$router.push('/huodong')
        },
        gorouter3(){
            this.$router.push('/guanli')
        }
        
    }
}
</script>

<style scoped lang="less">
    .aside {
        .aside_title {
            text-align: center;
            img {
                width:77px;
                height: 17px;
                margin-top: 12px;
                margin-bottom: 20px;
            }
        }
        .aside_menu {
            text-align: center;
            .aside_menu_box {
                cursor: pointer;
                padding-top: 10px;
                img {
                    width: 32px;
                    height: 32px;
                }
                font-size: 12px;
                width: 112px;
                height: 88px;
                background: inherit;
                background-color: rgba(0, 54, 134, 1);
                border: none;
                border-radius: 0px;
                color: #fff;
                .aside_menu_text {
                    margin-top: 10px;
                    font-weight: 400;
                }
            }
        }
    }
    .active {
        background-color: rgba(1,42,103,1);
    }

</style>