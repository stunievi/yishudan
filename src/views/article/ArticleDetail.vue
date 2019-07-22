<template>
  <div class="container">
    <div v-if="statu">
      <div class="title-box">
        <h1>{{data.title}}</h1>
      </div>
      <div class="article-admin-user">
        <img class="user-pic" src= "../../assets/logo.png" >
        <div class="article-info">
          <div class="user-name">
            <h3>{{data.name}}</h3>
          </div>
          <div class="article-data">
            <span>{{data.updated_at == null ? data.created_at : data.updated_at}} 阅读 {{data.reads}} 评论 6</span>
          </div>
        </div>
      </div>
      <div class="content">
          <!-- <Divider /> -->
          <div class="article_content">
            <div v-html="data.content">
            </div>
          </div>
        </div>
    </div>
    <div v-else-if="!statu">
      <!-- <span>网络错误</span> -->
      <Loading :type="networkStatu"/>
    </div>
  </div>
</template>
<script>
// this里面没有全局变量 所以引入（无头绪）
import fetch from '../../components/fetch'
export default {
  data () {
    return {
      statu: 0,
      networkStatu: true,
      id: this.$route.params.articleId,
      data: []
    }
  },
  methods: {
    detail: function () {
      // console.log(getData)
      fetch.getData('/api/article_detail','?id=' + this.id).then(R => {
        this.data = R
        this.statu = 1
      }).catch(E => {
        this.statu = 0
        this.networkStatu = false
      })
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
    text-align: center;
    padding:15px 15px 0 15px;
    @include desktop{
      width:pxTorem(650px);
    }
    .title-box{
      display: flex;
      h1{
        // font-weight: lighter;
      }
    }
    .article-admin-user{
      // padding: 0 15px;
      display: flex;
      margin-top:20px;
      align-items: center;
      margin-bottom: 25px;
      @include desktop{
        margin-bottom: 40px;
        margin-top:30px;
      }
      .user-pic{
        width:pxTorem(45px);
        height:pxTorem(45px);
        @include desktop{
          width:pxTorem(50px);
          height:pxTorem(50px);
        }
        border:1px solid #e9e9e9;
        border-radius: 28px;
      }
      .article-info{
        padding-left: 10px;
        text-align: left;
        .user-name{
          text-align:left;
          h3{
            font-weight: lighter;
            font-size: pxTorem(14px);
            @include desktop{
              font-size: pxTorem(16px);
            }
            margin-bottom:2px
          }
        }
        .article-data{
          span{
            color:rgb(160,160,160)
          }
        }
      }
    }
    .content{
      text-align:left;
      .article_content{
      }
    }
  }
</style>
