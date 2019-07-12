<template>
  <div class="content-width">
    <!-- <img alt="Vue logok" src="../assets/logo.png"> -->
    <!-- <Index class="ppp" msg='推荐书单'/> -->
    <div v-if="statu">
      <div class="cards">
        <!-- 分类id不为零显示返回 -->
        <div v-if="cate_id" @click="backButton()">
          <Card :padding="20" class="card-box" >
            <h4>返回</h4>
          </Card>
        </div>
        <div v-for="list in cate_list" :key= "list.id" @click='getSonCate(list.id)'>
          <Card :padding="20" class="card-box" >
            <h4>{{list.cate_name}}</h4>
          </Card>
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
      networkStatu: true,
    }
  },
  mounted: function () {
    this.getCateList()
  },
  methods: {
    getCateList: function (value = '') {
      this.getData.getData('/api/cateList',value).then(R => {
        this.cate_list = R
        this.statu = 1
      }).catch(E => {
        this.statu = 0
        this.networkStatu = false
      })
    },
    getSonCate: function (id) {
      // console.log(id)
      this.cate_id = id
      this.cate_arr.push(id)
      this.getCateList('?id=' + id)
    },
    // 每前进一步数组追加分类id，后退一步数组删除一位
    // 然后根据数组最后一位分类id查询展示分类。
    backButton: function (forward = null) {
      this.cate_arr.pop()
      var len = this.cate_arr[this.cate_arr.length-1]
      if (len == undefined || len == 0) {
        this.getCateList('?id=' + len)
        this.cate_id = 0
      }else{
        this.getCateList('?id=' + len)
      }
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
      margin-top:10px
    }
  }
}
</style>
