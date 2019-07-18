<template>
  <div class="content-width">
    <!-- <img alt="Vue logok" src="../assets/logo.png"> -->
    <Index class="ppp" msg='广而告之'/>
  </div>
</template>
<script>
import Index from '@/components/Index.vue'
export default {
  name: 'shudan',
  components: {
    Index
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
}
</style>
