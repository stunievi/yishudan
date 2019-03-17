<template>
  <div class="shudan">
    <!-- <img alt="Vue logok" src="../assets/logo.png"> -->
    <Index class="ppp" msg='推荐书单'/>
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
.ppp {
  color:$color
};
</style>
