<style lang='scss'>
    .spin-container{
    	display: inline-block;
        width: 200px;
        height: 100px;
        margin: auto;
        position: relative;
        .text{
           .console{
               color:#333; 
           }
        }
    }
</style>
<template>
    <div class="spin-container">
        <Spin fix v-if="type"></Spin>
        <div class="text" v-else>
            <span class="console">服务器君好像罢工了,刷新把他找回来吧</span>
        </div>
    </div>
</template>
<script>
    export default {
        props:{
            type: Boolean
        }
    }
</script>