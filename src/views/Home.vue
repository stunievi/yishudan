<template>
  <div class="home">
    <!-- <div id="navt">
      <Icon type="ios-menu" size='24' @click="value2 = true"/>
      <h5>艺术蛋</h5>
      <router-link to='/login'>
        <Icon type="md-person" size='24' />
      </router-link>
      <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div> -->
    <Title />
    <img alt="Vue logo" src="../assets/logo.png">
    <p v-on:click="ages++">{{ ages }}</p>
    <p v-on:click="clicks">{{ ages }}</p>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      ages: 1,
      value2: false,
      clicks: () => {
        alert(123)
      }
    }
  },
  components: {
    // HelloWorld
  }
}
</script>
<style lang='scss'>
#navt {
  height: 64px;
  background: #fff;
  border-bottom: 1px #f9f9f9 solid;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px 0 20px;
}
</style>
