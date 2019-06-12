<template>
  <div class="content-width" >
    <div v-if="statu == 1">
      <BackTop></BackTop>
      <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
      <!-- 版权 -->
      <!-- <Copy /> -->
      <!-- bidirectional data binding（双向数据绑定） -->
       <Input v-model="title" placeholder="标题..." />
      <quill-editor 
        v-model="content"
        ref="myQuillEditor"
        :options="editorOption"
        @blur="onEditorBlur($event)"
        @focus="onEditorFocus($event)"
        @ready="onEditorReady($event)">
      </quill-editor>
    </div>
    <div v-else-if="statu == 0">
      <!-- <span>网络错误</span> -->
      <Loading :type="networkStatu"/>
    </div>
  </div>
</template>

<script>
// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'
 
import { quillEditor } from 'vue-quill-editor'

export default {
  // name: 'home',
  data () {
    return {
      statu: 1,
      content: '',
      title: '',
      networkStatu: true,
      datas: [],
      editorOption: {
        // some quill options
        modules:{
          toolbar:[
            [{ 'size': ['small', false, 'large', 'huge'] }],
            [{ 'header': 2 }],
            // [{'align': []}],
            [{ 'color': [] }],
            ['bold', 'italic', 'underline', 'strike'],
            ['blockquote', 'code-block'],
            ['image','link'],
          ]
        },
        placeholder: '输入。。。',
        theme: 'snow'
      },
      toArtisanDetail: (articleId) => {
        // console.log(articleId)
        this.$router.push({ name: 'articledetail', params: { 'articleId': articleId } })
      }
    }
  },
  components: {
    quillEditor
  },
  methods: {
    onEditorBlur(quill) {
      console.log('editor blur!', quill)
    },
    onEditorFocus(quill) {
      console.log('editor focus!', quill)
    },
    onEditorReady(quill) {
      console.log('editor ready!', quill)
    },
    onEditorChange({ quill, html, text }) {
      console.log('editor change!', quill, html, text)
      this.content = html
    }
  },
  mounted: function () {
    // 待修改
    // this.getInfo(this)
  }
}
</script>
<style lang='scss'>
.content-width{
  width:100%;
  margin: 0 auto;
  @include desktop{
    padding:15px 15px 0 15px;
    width:pxTorem(650px);
  }
  .quill-editor{
    .ql-container{
      height:300px;
      @include desktop{
        height:400px
      }
    }
  }
}
</style>
