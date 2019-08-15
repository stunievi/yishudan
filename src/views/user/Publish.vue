<template>
  <div class="publish-content-width" >
    <div v-if="statu == 1">
      <BackTop></BackTop>
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- 版权 -->
      <!-- <Copy /> -->
      <div class="main-content">
        <div class="booklist-title">
          <Input v-model="title" placeholder="书单标题..." />
        </div>
        <div class="booklist-profile">
          <Input v-model="content" type="textarea" :rows="4" placeholder="书单描述..." />
        </div>
        <div class="booklist-itemlist">
          <div class="booklist-item">
            <div class="book-img">
              <img src="../../assets/timg.jpg" alt="">
            </div>
            <div class="book-info">
              <div class="book-title">
                <span>福尔摩斯探案集</span>
              </div>
              <div class="book-author">
                <span>柯南道尔</span>
              </div>
              <div>
                <span>名人谈读书： 世上本没有经典，装的人多了，也就有了经典上面这句话过于傲慢，我的意思是：经典之所以是经典，不应该是有多少人赞美过它，而是它真的能帮助你认识当下...</span>
              </div>
            </div>
          </div>
          <!-- <div class="booklist-item">
            <div class="book-img">
              <img src="../../assets/timg.jpg" alt="">
            </div>
            <div class="book-info">
              <div class="book-title">
                <input class="title" v-model="value14" placeholder="书名" clearable />
              </div>
              <div class="book-author">
                <input class="title" v-model="value3" size="small" placeholder="作者" />
              </div>
              <div class="text-input">
                <textarea  cols="30" rows="2" placeholder="你想说的"></textarea>
              </div>
            </div>
          </div> -->
          <div class="booklist-item">
            <div class="book-img">
              <img src="../../assets/timg.jpg" alt="">
            </div>
            <div class="book-info">
              <div class="book-title">
                <Select
                  class="select"
                  v-model="model13"
                  filterable
                  remote
                  size="small"
                  placeholder="书名"
                  :remote-method="remoteMethod1"
                  :loading="loading1">
                  <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
                </Select>
              </div>
              <div class="book-author">
                <Select
                  class="select"
                  v-model="model13"
                  filterable
                  remote
                  size="small"
                  placeholder="作者"
                  :remote-method="remoteMethod1"
                  :loading="loading1">
                  <Option v-for="(option, index) in options1" :value="option.value" :key="index">{{option.label}}</Option>
                </Select>
              </div>
              <div class="text-input">
                <!-- <Input v-model="value5" type="textarea" :autosize="true" placeholder="图书点评" /> -->
                <textarea  cols="30" rows="2" placeholder="你想说的"></textarea>
              </div>
            </div>
          </div>
        </div>
      </div>
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
      content: '',
      title: '',
      networkStatu: true,
      datas: [],
      toArtisanDetail: (articleId) => {
        // console.log(articleId)
        this.$router.push({ name: 'articledetail', params: { 'articleId': articleId } })
      }
    }
  },
  methods: {
    remoteMethod1 (query) {
      if (query !== '') {
        this.loading1 = true;
        setTimeout(() => {
          this.loading1 = false;
          const list = this.list.map(item => {
            return {
              value: item,
              label: item
            };
          });
          this.options1 = list.filter(item => item.label.toLowerCase().indexOf(query.toLowerCase()) > -1);
        }, 200);
      } else {
        this.options1 = [];
      }
    },
  },
  mounted: function () {
    // 待修改
    // this.getInfo(this)
  }
}
</script>
<style lang='scss'>
.publish-content-width{
  width:100%;
  margin: 0 auto;
  @include desktop{
    padding:15px 15px 0 15px;
    max-width:pxTorem($contentWidth);
  }
  .main-content{
    padding:10px 10px 0 10px;
    @include desktop{
      width:pxTorem(650px);
    }
    .booklist-title{
      margin-bottom:10px;
    }
    .booklist-profile{
      margin-bottom:10px;
    }
    .booklist-itemlist{
      .booklist-item{
        display: flex;
        border-bottom: 1px solid rgb(240,240,240);
        border-style:none none dashed none;
        margin-bottom:10px;
        .book-img{
          img{
            width:pxTorem(45px);
            height:pxTorem(60px);
            @include desktop{
              width:pxTorem(65px);
              height:pxTorem(80px);
            }
          }
        }
        .book-info{
          width: 100%;
          margin-left:15px;
          .book-title{
            margin-bottom:5px;
            span{
              font-size: pxTorem(16px);
            }
            .title{
              border: 0px;
              font-size:pxTorem(16px);
              outline:medium;
              border-bottom: 1px solid rgb(240,240,240);
            }
            .select{
              @include desktop{
                width:50%
              }
            }
          }
          .book-author{
            margin-bottom:5px;
            span{
              // font-size: pxTorem(1px);
            }
            .title{
              border: 0px;
              outline:medium;
              border-bottom: 1px solid rgb(240,240,240);
            }
            .select{
              @include desktop{
                width:50%
              }
            }
          }
          .text-input{
            width:100%;
            textarea{
              width:100%;
              border: 0px;
              outline:medium;
              border-bottom: 1px solid rgb(240,240,240);
            }
          }
        }
      }
    }
  }
}
</style>
