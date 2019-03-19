<template>
  <div class="all-view-div">
    <router-view/>
    <div>
      <span>
        这里是备案号
      </span>
    </div>
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
.all-view-div{
  height:100%
}
</style>
