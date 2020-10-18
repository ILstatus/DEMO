<template>
  <div class="list">
    <ul>
      <li v-for="(items,index) in lists" :key="index">
        <van-divider
          content-position="left"
          :style="{ color: '#42b983', borderColor: '#42b983', padding: '0 16px' }">
          专栏
        </van-divider>
        <h2>{{items.title}}</h2>
        <div :class="{cont:!active}">{{items.content}}</div>
        <van-button plain hairline type="primary" class="tg" @click="toggle">展开</van-button>
      </li>
    </ul>
  </div>
</template>

<script>
  import {mapState} from "vuex";

  export default {
    name: "List",
    data() {
      return {
        active:false,
      }
    },
    computed: {
      ...mapState(['lists'])
    },
    methods: {
      toggle(){
        this.active = !this.active
      }
    },
  }
</script>

<style scoped>
  .list{
    margin-bottom: 62px;
  }
  ul li{
    margin: 5px 5px;
    border: 1px solid #ccc;
    /*
    box-shadow: h-shadow v-shadow blur spread color inset;
    
    box-shadow: 水平阴影(必选) 垂直阴影(必选)
    模糊距离(可选-blur) 阴影尺寸(可选-spread)
    阴影颜色(可选) 外部阴影改为内部阴影(可选-inset)*/
    box-shadow: 3px 3px 3px #666464;
  }
  .cont {
    margin: 10px 2px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

</style>