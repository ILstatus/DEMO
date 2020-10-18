<template>
  <div class="home">
    <router-view></router-view>
    <ul class="footer">
      <li class="icons">
        <router-link :to="{name:'list'}">列表</router-link>
      </li>
      <li class="icons">
        <router-link :to="{name:'user'}">功能</router-link>
      </li>
    </ul>
  </div>
</template> class="icons"

<script>

  export default {
    name: 'Home',
  }
</script>

<style scoped lang="scss">
  .footer {
    position: fixed;
    width: 100%;
    height: 60px;
    line-height: 60px;
    left: 0;
    bottom: 0;
    display: flex;
    flex-flow: row nowrap;
    justify-content: space-around;
    background: white;
  }
  
  .icons {
    list-style: none;
    font-size: 16px;
    flex: 1;
    text-align: center;
    border-top: 1px solid #42b983;
    
    a {
      color: #42b983;
      display: block;
      
      &.active {
        color: #fff;
        background: #42b983;
      }
    }
  }
</style>
