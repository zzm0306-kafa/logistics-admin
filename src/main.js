import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
// 引入elementui组件
import ElementUI from 'element-ui'
// 引入element主题样式
import 'element-ui/lib/theme-chalk/index.css'
// 注册elementui
Vue.use(ElementUI)
Vue.config.productionTip = false
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
