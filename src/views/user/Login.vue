<template>
  <div class="lg-background">
    <div class="login-container">
      <div>
        <!-- <Icon type="md-close" /> -->
      </div>
      <div class="lg-header">
        <!-- <img class="logo-login-min" src="@/assets/logo.png" > -->
        <p class="lg-header-text">登陆 · 壹书单</p>
      </div>
      <div class="lg-body">
        <Form ref="formInline" :model="formInline" :rules="ruleInline" >
          <FormItem prop="email">
            <Input class="lg-input" type="text" clearable size="large" v-model="formInline.email" placeholder="手机号或邮箱" />
          </FormItem>
          <FormItem prop="password">
            <Input class="lg-input" type="password" size="large" v-model="formInline.password" placeholder="密码" />
          </FormItem>
          <FormItem>
            <Button class="lg-button" type="primary" @click="handleSubmit('formInline')">登录</Button>
          </FormItem>
        </Form>
      </div>
      <div class="lg-footer">
        <div>
          <Button class="lg-button lg-register" type="primary" @click="register('formInline')">注册</Button>
        </div>
        <div class="lg-extra">
          <span class="lg-extra-title">
            第三方登录
          </span>
          <div class="lg-extra-logo">
            <Icon type="logo-android" size="38"/>
            <Icon type="logo-android" size="38"/>
            <Icon type="logo-android" size="38"/>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss">
.lg-background{
  height:100%;
  @include desktop {
    background:#f3f3f3;
    display: flex;
    align-items: center;
  };
  .login-container{
    display: inline-flex;
    flex-direction: column;
    justify-items:"center";
    background:#fff;
    width:pxTorem(360px);
    @include desktop {
      min-height:450px
    }
    margin:0 auto;
    // display:flex;
    // justify-content:"center";
    .lg-button{
      width:pxTorem(250px);
    }
    .lg-header{
      padding-top:pxTorem(44px);
      padding-bottom:pxTorem(24px);
      .logo-login-min{
        height:pxTorem(58px);
        width:pxTorem(66px);
      }
      .lg-header-text{
        font-size:pxTorem(24px);
        font-weight:bolder
      }
    }
    .lg-body{
      display: flex;
      flex-direction: column;
      align-self: center;
      .lg-input{
        width:pxTorem(250px);
        font-size:pxTorem(14px)
      }
    }
    .lg-footer{
      .lg-register{
        background:#fff;
        color:#3194d0;
      }
      .lg-extra{
        margin-top:20px;
        width:100%;
        height:auto;
        display: flex;
        width: 100%;
        align-items: center;
        justify-content: center;
        flex-direction: column;
        .lg-extra-title{
          display: flex;
          align-items: center;
          &:before,
          &:after{
            content:"";
            width:50px;
            border-top: 1px solid #b5b5b5;
            display: block;
          }
          &:before{
            margin-right:10px;
          }
          &:after{
            margin-left:10px;
          }
        }
        .lg-extra-logo{
          width:pxTorem(250px);
          display: flex;
          justify-content: space-around;
          height:pxTorem(60px);
          align-items: center;
        }
      }
    }
  }
}

</style>
<script>
export default {
  data () {
    return {
      formInline: {
        email: '',
        password: ''
      },
      ruleInline: {
        email: [
          { required: true, message: '请输入手机号或邮箱', trigger: 'blur' }
        ],
        password: [
          { required: true, message: '请输入密码.', trigger: 'blur' },
          { type: 'string', min: 6, message: '密码不能少于6位', trigger: 'blur' }
        ]
      }
    }
  },
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate((valid) => {
        if (valid) {
          // let formData = new FormData()
          // formData.append('email', this.formInline['email'])
          // formData.append('password', this.formInline['password'])
          this.getData.postData('/api/login', 'email=' + this.formInline['email'] + '&password=' + this.formInline['password']).then(R => {
            // eslint-disable-next-line no-console
            this.$Message.success('登录成功')
            localStorage.setItem('info', R.token)
            this.goHome()
          }).catch(E => {
            this.$Message.error('密码或用户名错误')
          })
        } else {
          this.$Message.error('密码或用户名错误')
        }
      })
    },
    register () {
      this.$Message.error('注册')
    },
    goHome () {
      this.$router.replace('/')
    }
  }
}
</script>
