<template>
  <div class="content-width" >
    <div v-if="statu">
      <BackTop></BackTop>
      <div class="articlelist">
        <div class="anticle" v-for="artlist in datas" :key='artlist.id' @click="toArtisanDetail(artlist.id)">
          <div class="titlebox">
            <a class="title">{{artlist.title}}</a>
            <span class="profile">{{artlist.profile}}
            </span>
          </div>
          <div class="pic" v-if="artlist.profile_picture">
            <img :src='artlist.profile_picture'/>
          </div>
        </div>
      </div>
      <Copy />
    </div>
    <div v-else-if="!statu" style='display: flex;'>
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
      statu: 0,
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
    getInfo: (T) => {
      T.getData.getData('/api/Recommendation').then(R => {
        // eslint-disable-next-line no-console
        T.datas = R
        T.statu = 1
      }).catch(R => {
        T.statu = 0
        T.networkStatu = false
        // console.log(123,T)
      })
    }
  },
  mounted: function () {
    // 待修改
    this.getInfo(this)
  }
}
</script>
<style lang='scss'>
.content-width{
  width:100%;
  text-align: center;
  margin: 0 auto;
  @include desktop{
    padding:15px 15px 0 15px;
    width:pxTorem(650px);
  }
  .articlelist{
    margin-top:2px;
    background: rgb(250,250,250);
    .anticle{
      border-top: 4px solid rgb(250,250,250);
      border-radius: 5px;
      display: flex;
      cursor:pointer;
      padding: 0px 0;
      height:pxTorem(100px);
      width:100%;
      background: #ffffff;
      @include desktop{
        width:pxTorem(620px);
        height:pxTorem(130px);
        border-top: 1px solid rgb(250,250,250);
        background:#fff;
      }
      justify-content: center;
      .titlebox{
        overflow: hidden;
        text-overflow: ellipsis;
        display: flex;
        width:100%;
        flex-flow: column;
        justify-content: center;
        margin-right:5px;
        padding: 10px;
        .title{
          overflow: hidden;
          // width: min-content;
          text-align: left;
          text-overflow: ellipsis;
          white-space: nowrap;
          margin:5px 5px 5px 0px;
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
          text-align: left;
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
