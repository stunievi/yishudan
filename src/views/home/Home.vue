<template>
  <div class="content-width">
    <BackTop></BackTop>
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <div class="banner">
      <!-- <Carousel class="banner-height"  v-model="value2" arrow="always" autoplay loop> -->
      <Carousel class="banner-height"   arrow="always" autoplay loop>
        <CarouselItem>
          <div class="demo-carousel">
            1
            <img alt="Vue logo" src="../../assets/logo.png">
          </div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">2</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">3</div>
        </CarouselItem>
        <CarouselItem>
          <div class="demo-carousel">4</div>
        </CarouselItem>
      </Carousel>
    </div>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="clicks">{{ ages }}</p>
  </div>
</template>

<script>
export default {
  // name: 'home',
  data () {
    return {
      ages: 1,
      // value2: false,
      datas : [],
      clicks: () => {
        alert(123)
      }
    }
  },
  components: {
    // HelloWorld
  },
  methods: {
    getInfo: (T) => {
      T.getData.getData('/api/home_data_list').then(R => {
        // eslint-disable-next-line no-console
        console.log(R)
        T.datas = R
        for (var i in R.result){
          console.log(R.result[i])
        }
      })
    }
  },
  mounted: function () {
    this.getInfo(this)
  }
}
</script>
<style lang='scss'>
.content-width{
  width:100%;
  @include desktop{
    padding:15px;
  }
  .banner{
    width:100%;
    margin: 0 auto;
    background:coral;
    @include desktop{
      width:pxTorem(620px);
      height:pxTorem(250px);
    }
    height:pxTorem(150px);
    .banner-height{
      height:inherit;
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
}
</style>
