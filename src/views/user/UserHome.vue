<template>
<Affix class="title-fix">
  <div class="title">
    <div id="navt">
      <div class="navt-container">
        <div class="title-drawer-icon">
          <Icon  type="ios-menu" size='24' @click="DrawerValue = true"/>
        </div>
        <div class="title-menulist">
          <a href="/">
            <h3>用户中心</h3>
          </a>
        </div>
        <!-- <div class="title-menulist">
          <h3>壹书单</h3>
        </div> -->
        <div class="title-child-logo-search">
          <div @click="ToUser()" class="user-login-info">
            <div v-if="!loginStatu" class="title-drawer-icon">
              <Icon type="md-person" size='24' />
            </div>
            <div >
              <a class="title-lg-rgs">
                <span>
                  退出
                </span>
              </a>
            </div>
          </div>
        </div>
        <Drawer placement="left" :closable="false" v-model="DrawerValue">
          <div class="title-drawer">
            <div class="drawer-logo-position">
              <h2>壹书单</h2>
              <span>书的海洋中为你导航</span>
            </div>
            <div class="drawer-menu">
              <div class="drawer-menu-allcontent" @click="toMenuItem(1)">
                <Menu active-name="1" width="100%" >
                  <MenuItem name="1" replace to="/">
                      <Icon type="md-document" />
                      个人信息
                  </MenuItem>
                  <MenuItem name="2" to="/mrecommendationlist">
                      <Icon type="md-chatbubbles" />
                      文章管理
                  </MenuItem>
                  <MenuItem name="3">
                      <Icon type="md-heart" />
                      我的收藏
                  </MenuItem>
                  <MenuItem name="4">
                      <Icon type="md-leaf" />
                      
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </Drawer>
      </div>
    </div>
  </div>
</Affix>
</template>
<script>
export default {
  name: 'Title',
  data () {
    return {
      ages: this.GLOBAL.loginStatu,
      DrawerValue: false,
      // 登录状态代码
      loginStatu: 1,
      clicks: () => {
        alert(123)
      }
    }
  },
  methods: {
    ToUser () {
      // 检测用户是否登录
      // 待修改
      this.$router.push({ name: 'user', params: { userId: '123' } })
    },
    toMenuItem ($itemNo) {
      // alert(2)
      this.DrawerValue = !this.DrawerValue
      // switch ($itemno) {
      //   case 1:
      //     this.$router.push({ path: '/'})
      //     break;
      //   case 2:
      //     this.$router.push({ name: 'recommendationlist', params: { userId: '123' }})
      //     break;
      // }
    }
  }
}
</script>
<style lang='scss'>
.title-fix{
  .ivu-affix{
    z-index: 99;
  }
}
#navt {
  height: $headerHeight;
  background: #fff;
  border-bottom: 1px #f9f9f9 solid;
  padding: 0 20px 0 20px;
  font-size:pxTorem(16px);
  display: flex;
  align-items: center;
  justify-content: center;
  .navt-container{
    width:$container;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title-lg-rgs{
      display:flex;
        border: 1px solid #3194d0;
        color:#3194d0;
        padding:5px 10px;
        border-radius:16px;
        span{
          font-size:pxTorem(14px)
        }
      //#9adcd1
    }
    .title-menulist{
        // min-width:350px;
        a{
          color:#333
        }
      }
    @include desktop {
      .title-drawer,.title-drawer-icon{
        display:none
      }
      .title-menulist{
        // min-width:350px;
        a{
          color:#333
        }
      }
      .title-lg-rgs{
        display:flex;
        border: 1px solid #3194d0;
        color:#3194d0;
        padding:5px 10px;
        border-radius:16px;
        span{
          font-size:pxTorem(14px)
        }
      }
    }
  }
}
.title-drawer{
  height:100%;
  .drawer-logo-position{
    width:100%;
    height:80px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-flow: column;
  }
  .drawer-menu{
    width:100%
  }
}
</style>
