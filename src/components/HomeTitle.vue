<template>
<Affix class="title-fix ">
  <div class="title">
    <div id="navt">
      <div class="navt-container">
        <div class="title-drawer-icon">
          <Icon  type="ios-menu" size='24' @click="DrawerValue = true"/>
        </div>
        <div class="title-menulist">
          <a href="/">
            <h3><span>壹</span>书单</h3>
          </a>
        </div>
        <div class="title-child-logo-search">
          <div class="title-child-logo-search-content">
            <Input class="title-child-input" v-model="searchText"  search placeholder="搜索"  @on-search="ToSearch(searchText)" size="small" />
          </div>
          <div @click="ToUser()" class="user-login-info">
            <div v-if="!loginStatu" class="title-drawer-icon">
              <Icon type="md-person" size='24' />
            </div>
            <div v-if="loginStatu" class="user-info">
              <div class="user-pic">
                <img src= "../assets/logo.png" >
              </div>
            </div>
            <div v-else class="user-pc">
              <a class="title-lg-rgs">
                <span>
                  登录 / 注册
                </span>
              </a>
            </div>
          </div>
        </div>
        <!-- 抽屉 -->
        <Drawer placement="left" :closable="false" v-model="DrawerValue">
          <div class="title-drawer">
            <div class="drawer-logo-position">
              <h2><span>壹</span>书单</h2>
              <span>书的海洋中为你导航</span>
            </div>
            <div class="drawer-menu">
              <Input class="title-child-input" search v-model="searchText" placeholder="搜索" @on-search="ToSearch(searchText)" size="small" />
              <div class="drawer-menu-allcontent" @click="toMenuItem(1)">
                <Menu :active-name="active" width="100%" >
                  <MenuItem name="1" replace to="/">
                      <Icon type="md-document" />
                      首&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;页
                  </MenuItem>
                  <MenuItem name="recommendationlist" to="/recommendationlist">
                      <Icon type="md-chatbubbles" />
                      推荐书单
                  </MenuItem>
                  <MenuItem name="adv" to="/adv">
                      <Icon type="md-heart" />
                      广而告之
                  </MenuItem>
                  <MenuItem name="downLoad_azw" to="/downLoad_azw">
                      <Icon type="md-leaf" />
                      下载专区
                  </MenuItem>
                </Menu>
              </div>
            </div>
          </div>
        </Drawer>
        <!-- 抽屉结束 -->
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
      searchText: '',
      DrawerValue: false,
      active: this.$route.name,
      // 登录状态代码
      loginStatu: 0
    }
  },
  mounted: function () {
    this.loginStatu = localStorage.getItem('info') == null ? 0 : 1
    // this.active = this.$route.name
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
    },
    ToSearch (T) {
      if (T !== '') {
        this.DrawerValue = false
        this.$router.push({ name: 'searchresult', query: { q: T } })
      }
    }
  }
}
</script>
<style lang='scss'>
  @import url('https://fonts.font.im/css?family=ZCOOL+XiaoWei&display=swap');
.title-fix{
  width:100% !important;
  padding: 0 0 0 0 !important;
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
    width:100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    .title-lg-rgs{
      display:none
      //#9adcd1
    }
    .title-menulist{
        // min-width:350px;
        a{
          color:#3194d0;
          // color:#333;
          h3{
            // color:#D35172;
            font-family: 'ZCOOL XiaoWei', serif;
            span{
              color:#d0664c;
            }
            font-size:pxTorem(20px);
          }
        }
      }
    .title-child-logo-search{
      .title-child-logo-search-content{
        display:none;
      }
      .user-login-info{
        .user-pc{
          display:none
        }
        @include desktop {
          .user-pc{
            display:flex
          }
        }
        .user-info{
          .user-pic{
            display:flex;
            cursor: pointer;
            img{
              width:pxTorem(32px);
              height:pxTorem(32px);
            }
          }
        }
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
      .title-child-logo-search{
        display:flex;
        align-items: center;
        width: 50%;
        justify-content: flex-end;
        .user-login-info{
          height:40px;
          display: flex;
          align-items: center;
          .user-info{
            height:100%;
            width:100%;
            display:flex;
            align-items:center;
            .user-pic{
              display:flex;
              img{
                border: 1px solid #f9f9f9;
                border-radius:16px;
                width:pxTorem(32px);
                height:pxTorem(32px);
              }
            }
            .user-name{
              font-size:pxTorem(14px);
            }
          }
        }
        .title-child-logo-search-content{
          display:flex;
          align-items: center;
          width:50%;
          max-width:pxTorem(240px);
          .title-child-input{
            margin-right:10%;
            width:pxTorem(200px);
            display:flex;
            align-items: center;
            width:100%;
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
