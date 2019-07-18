<template>
  <div class="container">
    <div class="title-box">
      <h1>中年夫妻离婚后，谁更受伤，听听这3位人离婚夫妻自述</h1>
    </div>
    <div class="article-admin-user">
      <img class="user-pic" src= "../../assets/logo.png" >
      <div class="article-info">
        <div class="user-name">
          <span>用户名{{id}}</span>
        </div>
        <div class="article-data">
          <span>2019.02.24 22:45 字数 806 阅读 1668评论 6喜欢 </span>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      id: this.$route.params.articleId
    }
  },
  methods: {
    detail: function () {
      console.log(this)
      // this.getData('/api/article_detail').then(R => {
      //   console.log(R)
      // }).catch(E => {

      // })
    }
  },
  mounted: function () {
    this.detail()
  }
}
</script>
<style lang="scss">
  .container{
    width:100%;
    margin: 0 auto;
    @include desktop{
      padding:15px 15px 0 15px;
      width:pxTorem(650px);
    }
    .title-box{
      display: flex;
      margin-bottom: 15px;
      h1{
        font-weight: lighter;
      }
    }
    .article-admin-user{
      // padding: 0 15px;
      display: flex;
      .user-pic{
        width:pxTorem(36px);
        height:pxTorem(36px);
        border:1px solid #e9e9e9;
        border-radius: 18px;
      }
      .article-info{
        padding-left: 10px;
        .user-name{
          text-align:left;
        }
        .article-data{

        }
      }
    }
  }
</style>
