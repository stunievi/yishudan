<template>
  <div class="content-width">
    <div class="book-title">
      <div class="book-pic-pro">
        <img src="https://tse1-mm.cn.bing.net/th?id=OIP.eDlXDmViL5i3hPpvlvtkHwHaHa&w=209&h=209&c=8&rs=1&qlt=90&dpr=1.5&pid=3.1&rm=2" alt="" class="book-pic">
      </div>
      <div class="book-pro">
        <div>
          <h2>{{book_info.book_name}}</h2>
          <p>作者:&nbsp;&nbsp;{{book_info.short_name == null ? book_info.country_name == null ? '' : '[' + book_info.country_name + ']': '[' + book_info.short_name + ']'}} {{book_info.author_name == null ? '未知作者' : book_info.author_name}}</p>
        </div>
        <p @click="del()" style='cursor: pointer;'>反馈</p>
        <div class="book-down">
          <Button type="success">AWZ3下载</Button>
          <Button type="success" ghost>AWZ3上传</Button>
        </div>
      </div>
      <Modal
        v-model="modal"
        title="反馈"
        @on-ok="feedBack()"
        width="300">
        <Input v-model="value1" placeholder="输入问题"  />
      </Modal>
    </div>
    <Divider>简介</Divider>
    <div>
      <p>{{book_info.book_comment}}</p>
      <h5>作者简介</h5>
      <p>{{book_info.brief_introduce}}</p>
    </div>
    <Divider>评论</Divider>
    <div>
      <p>暂无评论
      </p>
    </div>
    <Divider> </Divider>
    <div>
      <p>资源来源于互联网，侵权请联系yishudan@mail.com,核实后将第一时间删除</p>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    id: Intl
  },
  data () {
    return {
      modal: false,
      statu: 0,
      value1: '',
      book_info: []
    }
  },
  methods: {
    del () {
      this.modal = true
    },
    feedBack () {
      // console.log(123)
    }
  },
  mounted: function () {
    this.getData.getData('/api/showBookInfo', '?id=' + this.id).then(R => {
      this.statu = 1
      this.book_info = R[0]
      console.log(this.book_info)
    }).catch(E => {
      this.statu = 0
      this.networkStatu = false
    })
  }
}
</script>
<style lang="scss" >
.content-width{
  width:100%;
  @include desktop{
    padding:15px;
    width:pxTorem(650px);
  }
  .book-title{
    padding:15px;
    display: flex;
    .book-pic-pro{
      .book-pic{
        width:pxTorem(135px);
        height:pxTorem(200px)
      }
    }
    .book-pro{
      text-align:left;
      padding: 20px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      .book-down{
        height: pxTorem(80px);
        justify-content: space-around;
        display: flex;
        flex-direction: column;
      }
    }
  }
}
</style>
