<template>
    <div class="copy">
        <span>网站资源收集于站外，侵权请联系yishudan@mail.com</span>
        <a href="http://www.miitbeian.gov.cn/" class="copy_num">网ICP备案:豫ICP备19007597号-1</a>
    </div>
</template>
<script>
    export default {
        name:'Copy'
    }
</script>
<style lang="scss">
    .copy{
        display:flex;
        justify-content: center;
        padding:10px;
        flex-direction: column;
        .copy_num{
            color:#333;
        }
    }
</style>