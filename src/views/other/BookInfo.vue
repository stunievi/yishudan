<template>
  <div class="content-width">
    <div v-if="statu">
      <div class="book-title">
        <div class="book-pic-pro">
          <img :src="book_info.book_pic" alt="" class="book-pic">
        </div>
        <div class="book-pro">
          <div>
            <h2>{{book_info.book_name}}</h2>
            <p>作者:&nbsp;&nbsp;{{book_info.short_name == null ? book_info.country_name == null ? '' : '[' + book_info.country_name + ']': '[' + book_info.short_name + ']'}} {{book_info.author_name == null ? '未知作者' : book_info.author_name}}</p>
          </div>
          <p @click="del()" style='cursor: pointer;'>反馈</p>
          <div class="book-down">
            <Button type="success" @click="download()">AZW3下载</Button>
            <Button type="success" ghost @click="upload_model = !upload_model">AZW3上传</Button>
          </div>
        </div>
        <Modal
          v-model="modal"
          title="反馈"
          @on-ok="feedBack()"
          width="300">
          <Input v-model="value1" placeholder="输入问题"  />
        </Modal>
        <Modal
          v-model="upload_model"
          title="上传"
          footer-hide
          width="300">
          <Upload :action="url"
            :max-size="100000" accept=".azw3" 
            :format="['azw','azw3']"
            :data="{'book_id': id}"
            :on-success="uploadSuccess">
            <Button icon="ios-cloud-upload-outline">上传AZW3文件</Button>
          </Upload>
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
    <div v-else-if="!statu">
      <!-- <span>网络错误</span> -->
      <Loading :type="networkStatu"/>
    </div>
  </div>
</template>
<script>
import Config from '../../components/config'
export default {
  data () {
    return {
      modal: false,
      statu: 0,
      value1: '',
      id: this.$route.params.bookId,
      book_info: [],
      networkStatu: true,
      upload_model: false,
      url:  Config.Url + '/api/uploadAZW'
    }
  },
  methods: {
    del () {
      this.modal = true
    },
    feedBack: function () {
      if (this.value1 !== '' || this.value1 !== '') {
        this.getData.postData('/api/getFeedBack', 'book_id=' + this.id + '&feed_back_info=' + this.value1).then(R => {
          console.log(R)
          if (R) {
            this.$Message.info('反馈成功')
          }
        }).catch(E => {
          this.$Message.info('反馈失败')
        })
      }
    },
    download: function () {
      // console.log( Config.Download + '/downloadAZW?book_id=' + this.id)
      window.location.href = Config.Url + '/downloadAZW?book_id=' + this.$route.params.bookId
    },
    uploadFile: function () {
      this.upload_model = 1
    },
    uploadSuccess: function () {
      this.$Message.info('上传成功')
    }
  },
  mounted: function () {
    this.getData.getData('/api/showBookInfo', '?book_id=' + this.$route.params.bookId ).then(R => {
      this.statu = 1
      this.book_info = R[0]
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
