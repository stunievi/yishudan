<template>
  <div class="content-width">
    <!-- <img alt="Vue logok" src="../assets/logo.png"> -->
    <!-- <Index class="ppp" msg='推荐书单'/> -->
    <div v-if="statu">
      <div class="cards">
        <Card :padding="20" v-for="list in cate_list" :key= "list.id" class="card-box">
          <h4>{{list.cate_name}}</h4>
        </Card>
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
      networkStatu: true,
    }
  },
  mounted: function () {
    this.getData.getData('/api/cateList').then(R => {
      this.cate_list = R
      this.statu = 1
    }).catch(E => {
      this.statu = 0
      this.networkStatu = false
    })
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
