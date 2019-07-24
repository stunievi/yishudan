<template>
<Affix class="title-fix">
  <div class="title">
    <div class="navt">
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
          <div class="user-login-info">
            <div v-if="!loginStatu" class="title-drawer-icon">
              <Icon type="md-person" size='24' />
            </div>
            <div v-if="loginStatu" class="user-info">
              <Dropdown placement="bottom-end">
                <div  @click="ToUser()" class="user-pic">
                  <img src= "../assets/logo.png" >
                </div>
                <DropdownMenu slot="list">
                  <router-link to="/user/center/userinfo"><DropdownItem >个人中心</DropdownItem></router-link>
                  <router-link to="/"><DropdownItem >我的消息</DropdownItem></router-link>
                  <router-link to="/user/center/ArtiManage"><DropdownItem>文章管理</DropdownItem></router-link>
                  <router-link to="/user/center/Collage"><DropdownItem >我的收藏</DropdownItem></router-link>
                  <router-link to="/user/center/Publish"><DropdownItem>我要发表</DropdownItem></router-link>
                  <router-link to="/ "><DropdownItem divided>退出</DropdownItem></router-link>
                  <!-- <DropdownItem divided>帮助反馈</DropdownItem> -->
                </DropdownMenu>
              </Dropdown>
            </div>
            <div v-else class="user-pc">
              <router-link to="/login" class="title-lg-rgs">
                <span>
                  登录 / 注册
                </span>
              </router-link>
            </div>
          </div>
        </div>
        <!-- 抽屉 -->
        <Drawer placement="left" :closable="false" v-model="DrawerValue">
          <div class="title-drawer">
            <div class="drawer-logo-position">
              <h2>壹书单</h2>
              <span>书的海洋中为你导航</span>
            </div>
            <div class="drawer-menu">
              <div class="drawer-menu-allcontent" @click="toMenuItem(1)">
                <Menu active-name="1" width="100%" >
                  <MenuItem name="1" replace to="/user/center/userinfo">
                      <Icon type="md-document" />
                      个人信息
                  </MenuItem>
                  <MenuItem name="2" to="/user/center/ArtiManage">
                      <Icon type="md-chatbubbles" />
                      文章管理
                  </MenuItem>
                  <MenuItem name="3" to="/user/center/Collage">
                      <Icon type="md-heart" />
                      我的收藏
                  </MenuItem>
                  <MenuItem name="4" to="/user/center/Publish">
                    <Icon type="md-leaf" />
                    我要发表
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
      loginStatu: localStorage.getItem('info') == null ? 0 : 1,
      searchText: '',
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
    },
    toExit () {
      localStorage.removeItem('info')
      this.$Message.success('退出')
      this.$router.replace('/')
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
.title-fix{
  padding: 0 5px 0 5px;
  .ivu-affix{
    z-index: 99;
  }
}
.navt {
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
          // color:#3194d0;
          color:#333;
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
        // width: 50%;
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
          // width:50%;
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
}
</style>
