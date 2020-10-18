<template>
  <div class="content">
    <img src="../assets/logo.png" alt="">
    <div class="bottom">
      <router-link tag="button" :to="{name:'add'}">添加</router-link>
      <router-link tag="button" :to="{name:'login'}">注销</router-link>
    </div>
  </div>
</template>

<script>
  export default {
    name: "User"
  }
</script>

<style scoped>
  .content {
    position: absolute;
    text-align: center;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
  }
  
  .bottom {
    display: flex;
    justify-content: center;
  }
  button{
    border:none;
    background: #42b983;
    color: white;
    width: 105px;
    height: 40px;
    margin: 0 10px;
  }
</style>