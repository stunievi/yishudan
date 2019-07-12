<template>
  <div class="all-view-div">
    <div class="all-view-router-view">
      <div class="arti-list">
        <!-- <img class="img-bacj" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560704626766&di=ec71603d2beb153959b1b2abfa5b3078&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ffa729e4ae720a1c4d50dd460e0aeddd76947e2d817b19-wZzuUO_fw658" alt=""> -->
        <div class="arti-list-item">
          <p>欢迎使用欢迎使用欢迎使用欢迎使用</p>
        </div>
      </div>
    </div>
    <div class="desktop-menu">
      <Affix :offset-top="64">
        <div class="search-hostory">
          <div>
            <h4>
              热门搜索
            </h4>
          </div>
          <div class="search-hostory-item">
            <span>
              {{input}}
            </span>
          </div>
          <div class="search-hostory-item">
            <span>
              历史记录
            </span>
          </div>
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
      input: this.$route.query.q
    }
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    '$route': 'getList'
  },
  methods: {
    getList () {
      this.input = this.$route.query.q
      console.log(this.$route.query);
      this.getData.postData('/api/search', 'query=' + this.$route.query.q).then(R => {
        // eslint-disable-next-line no-console
        console.log(123)
        console.log(123,R)
      }).catch(R => {
        console.log(123,R)
      })
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
      width:100%;
      margin: 0 auto;
      @include desktop{
        padding:15px 15px 0 15px;
        width:pxTorem(650px);
      }
      .arti-list{
        .arti-list-item{
          // background:rgb(240,240,240);
          border: 1px solid rgb(240,240,240);
          width:100%;
          // height:100px;
          border-radius:5px;
          text-align: left;
          padding:10px;
        }
      }
    }
    .desktop-menu{
      display:unset;
      width:pxTorem(180px);
      margin-top:15px;
      .search-hostory{
        display: flex;
        flex-direction: column;
        .search-hostory-item{
          border: 1px solid rgb(240,240,240);
          padding:1px 4px;
          border-radius:5px;
          width:max-content;
        }
      }
    }
  }
}
</style>
