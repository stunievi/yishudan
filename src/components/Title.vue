<template>
  <div class="home">
    <div id="navt">
      <Icon type="ios-menu" size='24' @click="DrawerValue = true"/>
      <h5>艺术蛋</h5>
      <router-link to='/login'>
        <Icon type="md-person" size='24' />
      </router-link>
      <Drawer title="Basic Drawer" placement="left" :closable="false" v-model="DrawerValue">
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </div>
  </div>
</template>
<script>
export default {
  name: 'Title',
  data () {
    return {
      ages: 1,
      DrawerValue: false,
      clicks: () => {
        alert(123)
      }
    }
  },
  props: {
    data: String
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
  font-size:pxTorem(16px);
}
</style>
