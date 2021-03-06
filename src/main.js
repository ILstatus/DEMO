import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import {Button,Form,Field,Divider,NavBar} from 'vant'

import 'vant/lib/index.css'

Vue.use(Button)
Vue.use(Form)
Vue.use(Field)
Vue.use(Divider)
Vue.use(NavBar);

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
