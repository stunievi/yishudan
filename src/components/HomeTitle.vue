<template>
  <div class="title">
    <Affix class="title-fix ">
      <div id="navt">
        <div class="navt-container">
          <div class="title-drawer-icon">
            <Icon  type="ios-menu" size='24' @click="DrawerValue = true"/>
          </div>
          <div class="title-menulist">
            <div class="logo">
              <a href="/">
                <h3><span>壹</span>书单</h3>
              </a>
            </div>
            <div class="menu-item">
              <div @click="isActive = 1">
                <router-link to="/home"><div :class="{ active: isActive == 1 }" class="item" >首页</div></router-link>
              </div>
              <div @click="isActive = 2">
                <router-link to="/recommendationlist"><div :class="{ active: isActive == 2 }" class="item" >发现</div></router-link>
              </div>
              <div @click="isActive = 3">
                <router-link to="/adv"><div :class="{ active: isActive == 3 }" class="item" >广告</div></router-link>
              </div>
              <div @click="isActive = 4">
                <router-link to="/downLoad_azw/0"><div :class="{ active: isActive == 4 }" class="item" >下载</div></router-link>
              </div>
            </div>
          </div>
          <div class="title-child-logo-search">
            <div class="title-child-logo-search-content">
              <Input class="title-child-input" v-model="searchText"  search placeholder="搜索"  @on-search="ToSearch(searchText)" size="small" />
            </div>
            <div class="user-login-info">
              <div v-if="!loginStatu" class="title-drawer-icon">
                <router-link to="/login" class="person-icon">
                  <Icon type="md-person" size='24' color="#333"/>
                </router-link>
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
                    <div  @click="quit()"><DropdownItem divided>退出</DropdownItem></div>
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
                <h2><span>壹</span>书单</h2>
                <span>书的海洋中为你导航</span>
              </div>
              <div class="drawer-menu">
                <Input class="title-child-input" search v-model="searchText" placeholder="搜索" @on-search="ToSearch(searchText)" size="small" />
                <div class="drawer-menu-allcontent" @click="toMenuItem(1)">
                  <Menu :active-name="active" width="100%" >
                    <MenuItem name="1" replace to="/">
                        <Icon type="md-document" />
                        首页
                    </MenuItem>
                    <MenuItem name="recommendationlist" to="/recommendationlist">
                        <Icon type="md-chatbubbles" />
                        发现
                    </MenuItem>
                    <MenuItem name="adv" to="/adv">
                        <Icon type="md-heart" />
                        广告
                    </MenuItem>
                    <MenuItem name="downLoad_azw" to="/downLoad_azw/0">
                        <Icon type="md-leaf" />
                        下载
                    </MenuItem>
                  </Menu>
                </div>
              </div>
            </div>
          </Drawer>
          <!-- 抽屉结束 -->
        </div>
      </div>
    </Affix>
  </div>
</template>
<script>
export default {
  name: 'Title',
  data () {
    return {
      isActive: 1,
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
    switch (this.$route.name) {
      case 'recommendationlist' :
        this.isActive = 2;
        break;
      case 'adv' :
        this.isActive = 3;
        break;
      case 'downLoad_azw' :
        this.isActive = 4;
        break;
      
    }
  },
  watch: {
    // 监听路由参数发生变化，重新加载页面
    "$route": "isActiveTrue"
  },
  methods: {
    ToUser () {
      // 检测用户是否登录
      // 待修改
      this.$router.push({ path: 'user/center/userinfo', params: { userId: '123' } })
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
    },
    quit () {
      // this.$router.replace('/home')
      localStorage.removeItem('info')
      this.$Message.success('退出')
      this.loginStatu = localStorage.getItem('info') == null ? 0 : 1
    },
    isActiveTrue () {
      console.log(this.$route)
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
    width:100% !important;
  }
  >div{
    width:auto !important;
  }
}
.all-view-div{
  .ivu-menu{
    z-index: 99 !important;
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
      display:none
      //#9adcd1
    }
    .title-menulist{
      display: flex;
      .logo{
        align-self: center;
        a{
          h3{
            font-family: 'ZCOOL XiaoWei', serif;
            color: #ca8269;
            span{
              // color: #ab6953;
            }
            font-size:pxTorem(20px);
          }
        }
      }
      .menu-item{
        display: none;
        @include desktop {
          display: flex;
          padding-left: 30px;
          a{
            display: flex;
            height: 64px;
            width:64px;
            justify-content: center;
            .item{
              align-self: center;            
            }
          }
          :hover{
            background: #f9f9f9;
          }
            a{
              .active {
              color:#ca8269;
            }
          }
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
        .title-drawer-icon{
          color:#333;
          .person{
            color:#333;            
          }
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
        border: 1px solid #ca8269;
        color: #ca8269;
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
