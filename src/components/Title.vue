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
        <router-link to='/login'>
          <div class="title-drawer-icon">
            <Icon type="md-person" size='24' />
          </div>
          <div class="title-lg-rgs">
            <span>
              登录 / 注册
            </span>
          </div>
        </router-link>
      </div>
      <Drawer  title="Basic Drawer" placement="left" :closable="false" v-model="DrawerValue">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
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
            padding-left: 15px;
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
</style>
