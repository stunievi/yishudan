<template>
  <div class="content-width" >
    <div v-if="statu == 1">
      <BackTop></BackTop>
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- 版权 -->
      <!-- <Copy /> -->
    </div>
    <div v-else-if="statu == 0">
      <!-- <span>网络错误</span> -->
      <Loading :type="networkStatu"/>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'home',
  data () {
    return {
      statu: 1,
      networkStatu: true,
      datas: [],
      toArtisanDetail: (articleId) => {
        // console.log(articleId)
        this.$router.push({ name: 'articledetail', params: { 'articleId': articleId } })
      }
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    // getInfo: (T) => {
    //   T.getData.getData('/api/home_data_list').then(R => {
    //     // eslint-disable-next-line no-console
    //     T.datas = R
    //     T.statu = 1
    //   }).catch(R=>{
    //     T.statu = 0
    //     T.networkStatu = false
    //     // console.log(123,T)
    //   })
    // }
  },
  mounted: function () {
    // 待修改
    // this.getInfo(this)
  }
}
</script>
<style lang='scss'>
.content-width{
  width:100%;
  margin: 0 auto;
  @include desktop{
    padding:15px 15px 0 15px;
    width:pxTorem(650px);
  }
  .banner{
    width:100%;
    margin: 0 auto;
    background:coral;
    border-radius: 5px;
    @include desktop{
      width:pxTorem(620px);
      height:pxTorem(250px);
    }
    height:pxTorem(150px);
    .banner-height{
      height:inherit;
      .ivu-carousel-list{
        border-radius: 5px;
      }
      .demo-carousel{
        height:pxTorem(150px);
        @include desktop{
          width:pxTorem(620px);
          height:pxTorem(250px);
        }
        img{
          height:100%;
        }
      }
    }
  }
  .articlelist{
    margin-top:2px;
    .anticle{
      border-bottom: 1.5px solid #fff;
      border-radius: 5px;
      display: flex;
      cursor:pointer;
      padding: 0px 0;
      height:pxTorem(100px);
      width:100%;
      background: rgb(248,248,248);
      @include desktop{
        width:pxTorem(620px);
        height:pxTorem(130px);
        border-bottom: 1px solid #eee;
        background:#fff;
      }
      justify-content: center;
      .titlebox{
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        flex-flow: column;
        justify-content: center;
        margin-right:5px;
        .title{
          overflow: hidden;
          // width: min-content;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin:5px;
          // display: flex;
          color:#333;
          font-weight: 700;
          font-size:pxTorem(14px);
          @include desktop{
            font-size:pxTorem(16px);
            font-weight: 700;
          }
        }
        .profile{
          overflow: hidden;
          // text-overflow: ellipsis;
          // white-space: nowrap;
          color:#999;
          height:pxTorem(40px);
          line-height: 20px;
          @include desktop{
            height:pxTorem(56px);
            line-height: 20px;
          }
        }
      }
      .pic{
        align-self: center;
        img{
          @include desktop{
            width:pxTorem(150px);
            height:pxTorem(100px);
          }
          border-radius: 5px;
          width:pxTorem(80px);
          height:pxTorem(80px);
        }
      }
    }
  }
}
</style>
