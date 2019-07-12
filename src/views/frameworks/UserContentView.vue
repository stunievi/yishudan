<template>
  <div class="all-view-div">
    <div class="all-view-router-view">
      <router-view/>
    </div>
    <div class="desktop-menu">
      <Affix :offset-top="64">
        <div class="affix-logo-user">
          <div class="user-picture">
            <img src="../../assets/logo.png" alt="">
          </div>
          <h4>
            用户12312817
          </h4>
        </div>
        <div class="menu">
          <Menu active-name="1" width="100%" >
            <MenuItem name="1" replace to="/userinfo">
                <Icon type="md-document" />
                个人信息
            </MenuItem>
            <MenuItem name="2" to="/ArtiManage">
                <Icon type="md-chatbubbles" />
                文章管理
            </MenuItem>
            <MenuItem name="3" to="/Collage">
                <Icon type="md-heart" />
                我的收藏
            </MenuItem>
            <MenuItem name="4" to="/Publish">
                <Icon type="md-leaf" />
                我要发表
            </MenuItem>
            <MenuItem name="5" to="/Publish">
                <Icon type="md-leaf" />
                上传图书
            </MenuItem>
          </Menu>
        </div>
      </Affix>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // value2: false
    }
  }
}
</script>
<style lang='scss'>
.all-view-div{
  height:100%;
  .ivu-menu-light.ivu-menu-vertical .ivu-menu-item-active:not(.ivu-menu-submenu){
    background:#fff;
  }
  .desktop-menu{
    display:none
  }
  @include desktop{
    max-width:$contentWidth;
    display:flex;
    margin: 0 auto;
    justify-content: center;
    .all-view-router-view{
      // flex-grow:1
    }
    .desktop-menu{
      display:unset;
      width:pxTorem(180px);
      margin-top:15px;
      .affix-logo-user{
        // height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
        flex-flow: column;
        border-right: 1.5px solid #dcdee2;
        // padding:5px;
        .user-picture{
          display: flex;
          width:pxTorem(60px);
          height:pxTorem(60px);
        }
        h4{
          padding:5px 0;
        }
      }
      .menu{
        width:100%
      }
    }
  }
}
</style>
