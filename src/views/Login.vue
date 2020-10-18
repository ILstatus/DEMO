<template>
  <div>
    <div class="form">
      <!--  登录  -->
      <van-form v-if="isReg">
        <p>登录</p>
        <van-field
          v-model="name"
          name="USERNAME"
          label="USERNAME"
          placeholder="USERNAME"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="PASSWORD"
          label="PASSWORD"
          placeholder="PASSWORD"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <div class="btn">
          <van-button type="primary" @click="log">Login</van-button>
          <van-button type="primary" @click="reg">Register</van-button>
        </div>
      </van-form>
      <!--  注册  -->
      <van-form v-else>
        <p>注册</p>
        <van-field
          v-model="name"
          name="USERNAME"
          label="USERNAME"
          placeholder="USERNAME"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="PASSWORD"
          label="PASSWORD"
          placeholder="PASSWORD"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <van-field
          v-model="repeat"
          type="password"
          name="PASSWORD"
          label="PASSWORD"
          placeholder="REPEAT"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <a v-show="isPas">密码不一致</a>
        <div class="btn">
          <van-button type="primary" @click="addUser">REGISTER</van-button>
          <van-button type="primary" @click="cancel">CANCEL</van-button>
        </div>
        <b @click="toggle">已注册？去登录</b>
      </van-form>
    </div>
  </div>
</template>

<script>
  import {Toast} from "vant";

  export default {
    name: "Login",
    data() {
      return {
        isReg: false,
        isPas: false,
        name: '',
        password: '',
        repeat: '',
      }
    },
    methods: {
      log() {
        if (localStorage.getItem('name') === this.name && localStorage.getItem('password') === this.password) {
          this.$router.push('/home/list')
        } else {
          Toast.fail('内容不正确或者为空');
        }

      },
      reg() {
        this.isReg = false
      },
      addUser() {
        // 如果全部为空则提示错误
        if (this.name === '' && this.password === '' && this.repeat == '') {
          Toast.fail('输入为空');
        } else {
          // 密码与重复密码的判断
          if (this.password === this.repeat) {
            localStorage.setItem("name", this.name);
            localStorage.setItem('password', this.password);
            this.name = '';
            this.password = '';
            this.repeat = '';
            // 将登录状态显示出来
            this.isReg = true;
          } else {
            this.isPas = true
            this.password = this.repeat = ''
          }
        }
      },
      cancel() {
        this.isReg = false;
        // 清空缓存
        localStorage.clear()
      },
      toggle() {
        this.isReg = true
      }
    },
  }
</script>

<style scoped>
  p {
    margin: 10px 0;
    font-weight: bold;
    color: #42b983;
    font-size: 18px;
  }
  
  .form {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .btn {
    display: flex;
    justify-content: center;
    margin-top: 10px;
  }
  
  .btn button {
    width: 105px;
    margin: 0 10px;
  }
  
  a, b {
    display: block;
    height: 20px;
    line-height: 20px;
    text-align: center;
    color: #42b983;
    font-size: 12px;
  }
</style>