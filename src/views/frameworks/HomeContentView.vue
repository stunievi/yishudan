<template>
  <div class="all-view-div">
    <div class="all-view-router-view">
      <router-view/>
    </div>
    <div class="desktop-menu">
      <Affix :offset-top="64">
        <div class="affix-logo-text">
          <h4>
            书的海洋中为你导航
          </h4>
        </div>
        <div class="menu">
          <Menu :theme="theme3" active-name="1" width="100%">
            <MenuItem name="1">
              <Icon type="md-document" />
              文章管理
            </MenuItem>
            <MenuItem name="2">
              <Icon type="md-chatbubbles" />
              评论管理
            </MenuItem>
            <MenuItem name="3">
              <Icon type="md-heart" />
              用户留存
            </MenuItem>
            <MenuItem name="4">
              <Icon type="md-leaf" />
              流失用户
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
      value2: false
    }
  }
}
</script>
<style lang='scss'>
.all-view-div{
  height:100%;
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
      .affix-logo-text{
        height: 64px;
        display: flex;
        align-items: center;
        justify-content: center;
      }
      .menu{
        width:100%
      }
    }
  }
}
</style>
