<template>
  <div id="app">
    <!-- <div id="nav">
      <Icon type="ios-menu" size='24' @click="value2 = true"/>
      <h5>艺术蛋</h5>
      <router-link to='/login'>
        <Icon type="md-person" size='24' />
      </router-link> -->
      <!-- <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to='/shudan'>Shudan</router-link> -->
      <!-- <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="value2">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div> -->
    <router-view/>
  </div>
</template>
<script>
export default {
  data () {
    return {
      value2: false
    }
  }
}
</script>
<style lang='scss'>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  height: 100%;
  /* margin-top: pxTorem(60px); */
}
</style>
