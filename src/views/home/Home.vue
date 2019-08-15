<template>
  <div class="container-width" >
    <div v-if="statu" >
      <BackTop></BackTop>
      <Row class="content">
        <Col :sm="24" :md="17" :lg="18" class-name="article">
          <div class="banner">
            <Carousel class="banner-height"   arrow="always" autoplay loop >
              <CarouselItem v-for="list in datas.banner" :key='list.value'>
                <div class="demo-carousel">
                  <img alt="Yishudan" :src='list' width='100%' height="100%">
                </div>
              </CarouselItem>
            </Carousel>
          </div>
          <div class="articlelist">
            <router-link  v-for="artlist in datas.articlelist" :key='artlist.id' :to="'/articledetail/' + artlist.id">
            <div class="anticle">
                <div class="titlebox">
                  <a class="title">{{artlist.title}}</a>
                  <span class="profile">{{artlist.profile}}
                  </span>
                </div>
                <div class="pic" v-if="artlist.profile_picture">
                  <img :src='artlist.profile_picture'/>
                </div>
            </div>
            </router-link>
          </div>
        </Col>
        <Col :sm="0" :md="7" :lg="6" class-name="other">
          <div class="hot-book">
            <div class="hot-book-title">
              <div>
                <span>热门图书</span>
              </div>
              <div>
                <Icon type="ios-refresh" size="18"/>
                <span>换一批</span>
              </div>
            </div>
            <div class="hot-book-list">
              <div class="hot-book-list-item">
                <img src="http://5b0988e595225.cdn.sohucs.com/images/20180825/72e000529dfe4e9cb01d5739d2aa3b2f.jpeg" alt="">
                <div>
                  <span>快写好了</span>
                </div>
              </div>
              <div class="hot-book-list-item">
                <img src="http://5b0988e595225.cdn.sohucs.com/images/20180825/72e000529dfe4e9cb01d5739d2aa3b2f.jpeg" alt="">
                <div>
                  <span>快写好了</span>
                </div>
              </div>
              <div class="hot-book-list-item">
                <img src="http://5b0988e595225.cdn.sohucs.com/images/20180825/72e000529dfe4e9cb01d5739d2aa3b2f.jpeg" alt="">
                <div>
                  <span>快写好了</span>
                </div>
              </div>
              <div class="hot-book-list-item">
                <img src="http://5b0988e595225.cdn.sohucs.com/images/20180825/72e000529dfe4e9cb01d5739d2aa3b2f.jpeg" alt="">
                <div>
                  <span>快写好了</span>
                </div>
              </div>
              <!-- <div class="hot-book-list-item">
                <img src="http://5b0988e595225.cdn.sohucs.com/images/20180825/72e000529dfe4e9cb01d5739d2aa3b2f.jpeg" alt="">
                <div>
                  <span>快写好了</span>
                </div>
              </div>
              <div class="hot-book-list-item">
                <img src="http://5b0988e595225.cdn.sohucs.com/images/20180825/72e000529dfe4e9cb01d5739d2aa3b2f.jpeg" alt="">
                <div>
                  <span>快写好了</span>
                </div>
              </div> -->
            </div>
          </div>
          <div class="hot-authors">
            <div class="hot-authors-title">
              <div>
                <span>热门作者</span>
              </div>
              <div>
                <Icon type="ios-refresh" size="18"/>
                <span>换一批</span>
              </div>
            </div>
            <div class="hot-authors-list">
              <!-- 取出5条 -->
              <div class="hot-authors-list-item">
                <div class="hot-authors-list-item-avatar">
                  <Avatar style="background-color: #87d068" icon="ios-person" size="large"/>
                  <div class="hot-authors-title-list-item-avatar-detail">
                    <p>壹书单</p>
                    <span>发布了10张书单</span>
                  </div>
                </div>
                <div class="hot-authors-list-item-star">
                  <Icon type="ios-heart-outline" size="18"/>
                  <span>关注</span>
                </div>
              </div>
              <div class="hot-authors-button">
                <span>查看更多</span>
              </div>
            </div>
          </div>
        </Col>
      </Row>
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
      datas: []
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    getInfo: (T) => {
      T.getData.getData('/api/home_data_list').then(R => {
        // eslint-disable-next-line no-console
        T.datas = R
        T.statu = 1
      }).catch(R => {
        T.statu = 0
        T.networkStatu = false
        // console.log(123,T)
      })
    },
  },
  mounted: function () {
    // 待修改
    this.getInfo(this)
  }
}
</script>
<style lang='scss'>
.container-width{
  width:100%;
  text-align: center;
  margin: 0 auto;
  max-width:pxTorem($contentWidth);
  @include desktop{
    .content{
      margin: 0 auto;
      // display: flex;
      // justify-content: space-around;
    }
  }
  .article{
    @include desktop{
      display: flex;
      flex-direction: column;
      // width:pxTorem(500px);
      padding:15px 15px 0 15px;
    }
    .banner{
      width:100%;
      // margin: 0 auto;
      background:coral;
      border-radius: 5px;
      @include desktop{
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
            width:100%;
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
          width:100%;
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
          margin-right:10px;
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
  .other{
    display: none;
    @include desktop{
      display: flex;
      // background:#f9f9f9;
      // min-width:pxTorem(200px);
      padding:15px 15px 0 0;
      flex-direction: column;
      .hot-book{
        width:100%;
        .hot-book-title{
          width:100%;
          display: flex;
          justify-content: space-between;
          font-size: pxTorem(14px);
          color:#999;
        }
        .hot-book-list{
          display: flex;
          justify-content: space-around;
          flex-wrap: wrap;
          @include desktop{
            justify-content: space-between;
          }
          .hot-book-list-item{
            margin-top:5px;
            img{
              width:pxTorem(65px);
              height:pxTorem(85px);
            }
          }
          
        }
      }
      .hot-authors{
        width:100%;
        margin-top: 10px;
        .hot-authors-title{
          width:100%;
          display: flex;
          justify-content: space-between;
          font-size: pxTorem(14px);
          color:#999;
        }
        .hot-authors-list{
          .hot-authors-list-item{
            display: flex;
            justify-content: space-between;
            margin-top:5px;
            .hot-authors-list-item-avatar{
              display: flex;
              justify-content: center;
              align-items: center;
              .hot-authors-title-list-item-avatar-detail{
                margin-left:10px;
                text-align: left;
                p{
                  font-size:pxTorem(14px);
                }
                span{
                  color:#808695
                }
              }
            }
            .hot-authors-list-item-star{
              display: flex;
              align-items: center;
              // width:100%
              color:#19be6b;
              font-size:pxTorem(14px);
            }
          }
          .hot-authors-button{
            // width: 100%; 
            border:1px solid #808695;
            border-radius: 10px;
            height:36px;
            margin:10px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }
      }
    }
  }
}
</style>