<template>
  <div>
    <van-divider :style="{ color: '#42b983', borderColor: '#42b983', padding: '0 16px' }">
      标题
    </van-divider>
    <van-field v-model="title" placeholder="请输入标题"/>
    <van-divider :style="{ color: '#42b983', borderColor: '#42b983', padding: '0 16px' }">
      内容
    </van-divider>
    <textarea name="value"  cols="30" rows="10" v-model="content"></textarea>
    <van-button plain type="primary" @click="add">发布</van-button>
  </div>
</template>

<script>
  import {Toast} from "vant";

  export default {
    name: "Add",
    data() {
      return {
        title: '',
        content: '',
      }
    },
    methods: {
      add() {
        if (this.title === '' && this.content === '') {
          Toast.fail('输入内容为空')
        }else {
          this.$store.commit('addItem',{
            title:this.title,
            content:this.content});
          this.$router.push('/home/list');
          this.title = '';
          this.content = '';
        }
      }
    }
  }
</script>

<style scoped>
  
  textarea {
    border: 1px solid #42b983;
    width: 100%;
    /*background-color: transparent;*/
    /*scrollbar-arrow-color:yellow;
    scrollbar-base-color:lightsalmon;
    overflow: hidden;*/
    color: #666464;
    height: auto;
  }
</style>