### litter-note

复习 `Vue `知识之余做的一个小demo，方便初学小白做练习

（本DEMO只是玩玩，里面的逻辑不能用到实际开发中！！！）



#### 技术栈

```shell script
Vue + VueX + VueRouter + Vant
```


### 知识点分析

* 登录注册
  * 使用`localStorage`缓存记录用户状态
    * 用户起初未登录则不允许直接登录
    * 注册完毕后获取缓存转至登录，使用缓存登录
  * 登录成功后跳转

* 添加笔记
  * 使用`Vuex`保存添加的标题和内容，然后其他组件获取


### 安装

```
npm install
```

### 运行
```
npm run serve
```

