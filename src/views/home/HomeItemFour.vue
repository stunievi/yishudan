<template>
  <div class="content-width">
    <!-- <img alt="Vue logok" src="../assets/logo.png"> -->
    <!-- <Index class="ppp" msg='推荐书单'/> -->
    <div v-if="statu">
      <div class="cards">
        <!-- 分类id不为零显示返回 -->
        <div v-if="cate_id" @click="backButton()">
          <!-- <Button shape="circle"><Icon type="md-arrow-back" size="20"/></Button> -->
          <Card  class="card-box" >
            <!-- <h4>返回</h4> -->
            <Icon type="md-arrow-back" size="24"/>
          </Card>
        </div>
        <!-- 分类 -->
        <div v-if="!is_book_list">
          <div v-for="list in cate_list" :key= "list.id" @click='getSonCate(list.id)'>
            <Card :padding="20" class="card-box" >
              <h4>{{list.cate_name}}</h4>
            </Card>
          </div>
        </div>
        <!-- 图书列表 -->
        <div v-else>
          <div v-for="list in cate_list" :key= "list.id" @click='getBookInfo(list.id)'>
            <Card :padding="10" class="card-box" >
              <div class="book-list">
                <img class="book-pic" :src="list.book_pic" :alt="list.cate_name" >
                <div class="book-title-pro">
                  <h4>{{list.book_name}} </h4>
                  <h5>[{{list.short_name == null ? list.country_name :list.short_name}} {{list.author_name == null ? '未知' : list.author_name}}]</h5>
                  <span class="book-pro">{{list.book_profile}}</span>
                </div>
              </div>
            </Card>
          </div>
          <div  style="margin-top:15px" v-if="cate_list.length == 0">
            <span>什么？这个分类下还没有图书？</span>
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
// import Index from '@/components/Index.vue'
export default {
  // name: 'shudan',
  // components: {
  //   Index
  // },
  data () {
    return {
      // index: 0,
      cate_list: [],
      statu: 0,
      cate_id: 0,
      cate_arr: [0],
      is_book_list: 0,
      list_len: 0,
      networkStatu: true
    }
  },
  mounted: function () {
    this.getCateList()
  },
  methods: {
    getCateList: function (value = '') {
      this.getData.getData('/api/cateList', value).then(R => {
        if (R[R.length - 1].is_book_list === 1) {
          R.pop()
          this.cate_list = R
          this.is_book_list = 1
          this.list_len = R.lenth
        } else {
          this.is_book_list = 0
          this.cate_list = R
        }
        this.statu = 1
      }).catch(E => {
        this.statu = 0
        this.networkStatu = false
      })
    },
    getSonCate: function (id) {
      // console.log(id)
      this.cate_id = id
      // 后退数组
      this.cate_arr.push(id)
      this.getCateList('?id=' + id)
    },
    // 每前进一步数组追加分类id，后退一步数组删除一位
    // 然后根据数组最后一位分类id查询展示分类。
    backButton: function (forward = null) {
      this.cate_arr.pop()
      this.statu = 0
      var len = this.cate_arr[this.cate_arr.length - 1]
      if (len === undefined || len === 0) {
        this.getCateList('?id=' + len)
        this.cate_id = 0
      } else {
        this.getCateList('?id=' + len)
      }
    },
    // 进入图书详情页
    getBookInfo: function () {

    }
  }
}
</script>
<style lang="scss">
$color: red;
.content-width{
  width:100%;
  @include desktop{
    padding:15px;
    width:pxTorem(650px);
  }
  .cards{
    .card-box{
      margin-top:10px;
      .book-list{
        display: flex;
        .book-pic{
          width:pxTorem(80px);
          height:pxTorem(110px);
        }
        .book-title-pro{
          margin-left:10px;
          text-align: left;
          .book-pro{
            display: block;
            margin-top:10px
          }
        }
      }
    }
  }
}
</style>
