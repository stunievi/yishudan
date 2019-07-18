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
      </Affix>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      // value2: false
      active: this.$route.name
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
