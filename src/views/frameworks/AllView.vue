<template>
  <div class="all-view-div">
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
.all-view-div{
  height:100%
}
</style>
