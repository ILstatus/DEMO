<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
  import Home from "./views/Home";

  export default {
    name: 'App',
    components: {
      Home
    }
  }
</script>

<style lang="scss">
  * {
    padding: 0;
    margin: 0;
  }
  
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
</style>
