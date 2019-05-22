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
  created () {
    // 待修改
    let isLogin = localStorage.getItem('info') == null ? 0 : 1
    if (isLogin) {
      this.$router.replace({ path: '/user/home', params: { userId: '123' } })
    } else {
      this.$router.replace({ name: 'login', params: { userId: '123' } })
    }
  }
}
</script>
<style lang='scss'>
.all-view-div{
  height:100%
}
</style>
