<template>
  <div class="home">
    <div id="navt">
      <div class="title-drawer-icon">
        <Icon  type="ios-menu" size='24' @click="DrawerValue = true"/>
      </div>
      <div class="title-menulist">
        <h3>壹书单</h3>
      </div>
      <!-- <div class="title-menulist">
        <h3>壹书单</h3>
      </div> -->
      <div class="title-child-logo-search">
        <div class="title-child-logo-search-content">
          <Input class="title-child-input" search placeholder="搜索" size="small" />
        </div>
        <div @click="ToUser()">
          <div class="title-drawer-icon">
            <Icon type="md-person" size='24' />
          </div>
          <div class="title-lg-rgs">
            <span>
              登录 / 注册
            </span>
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
            <Input class="title-child-input" search placeholder="搜索" size="small" />
            <div class="drawer-menu-allcontent" @click="toMenuItem(1)">
              <Menu active-name="1" width="100%" >
                <MenuItem name="1" replace="true" to="/">
                    <Icon type="md-document" />
                    首页
                </MenuItem>
                <MenuItem name="2" to="/recommendationlist">
                    <Icon type="md-chatbubbles" />
                    精品书单
                </MenuItem>
                <MenuItem name="3">
                    <Icon type="md-heart" />
                    精品书单
                </MenuItem>
                <MenuItem name="4">
                    <Icon type="md-leaf" />
                    精品书单
                </MenuItem>
              </Menu>
            </div>
          </div>
        </div>
      </Drawer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Title',
  data () {
    return {
      ages: 1,
      DrawerValue: false,
      clicks: () => {
        alert(123)
      }
    }
  },
  methods: {
    ToUser () {
      //检测用户是否登录
      if(true){
        this.$router.push({ name: 'login', params: { userId: '123' }})
      }
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
  },
  props: {
    data: String
  }
}
</script>
<style lang='scss'>
#navt {
  height: 64px;
  background: #fff;
  border-bottom: 1px #f9f9f9 solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
  font-size:pxTorem(16px);
  .title-lg-rgs{
    display:none
    //#9adcd1
  }
  .title-child-logo-search-content{
    display:none
  }
  @include desktop {
    .title-drawer,.title-drawer-icon{
      display:none
    }
    .title-menulist{
      // min-width:350px;
    }
    .title-child-logo-search{
      display:flex;
      align-items: center;
      .title-child-logo-search-content{
        display:flex;
        align-items: center;
        .title-child-input{
          margin-right:10%;
          width:pxTorem(200px);
          display:flex;
          align-items: center;
          input{
            border-radius: 16px;
            height:pxTorem(32px);
            padding-left: 15px
          }
          i{
            font-size:pxTorem(16px);
            margin-right:5px;
            border: 1px solid #d9d9d9;
            border-radius: 16px;
            background: #d9d9d9;
            color: #fff;
          }
        }
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
  .title-child-input{
    display:flex;
    align-items: center;
    padding: 10px 0;
    input{
      // border-radius: 16px;
      height:pxTorem(32px);
      padding-left: 10px
    }
    i{
      font-size:pxTorem(16px);
      margin-right:5px;
      border: 1px solid #d9d9d9;
      border-radius: 16px;
      background: #d9d9d9;
      color: #fff;
    }
  }
}
</style>
