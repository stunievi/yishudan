<template>
  <div class="content-width" >
    <div v-if="statu == 1">
      <BackTop></BackTop>
      <div class="background">
        <!-- <img class="img-bacj" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1560704626766&di=ec71603d2beb153959b1b2abfa5b3078&imgtype=0&src=http%3A%2F%2Fhbimg.b0.upaiyun.com%2Ffa729e4ae720a1c4d50dd460e0aeddd76947e2d817b19-wZzuUO_fw658" alt=""> -->
        <div class="color-beau">

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
  .background{
    .img-bacj{
      width:100%;
      height:200px;
    }
    .color-beau{
      background:rgb(240,240,240);
      width:100%;
      height:100px;
    }
  }
}
</style>
