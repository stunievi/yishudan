<template>
  <transition>
    <router-view/>
  </transition>
    <!-- <div>
      <span>
        这里是备案号
      </span>
    </div>
  </div> -->
</template>
<script>
export default {
  data () {
    return {
      // value2: false
    }
  },
  mounted () {
    // 待修改
    let isLogin = 0
      if (isLogin) {
        this.$router.push({ path: '/user/userHome', params: { userId: '123' } })
      }else{
        this.$router.push({ name: 'login', params: { userId: '123' } })
      }
  }
}
</script>
<style lang='scss'>
.all-view-div{
  height:100%
}
</style>
