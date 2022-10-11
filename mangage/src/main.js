import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import './permission'
//element 引入
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import './style/switch.css'
Vue.use(ElementUI);
//解决菜单折叠
import Fragment from 'vue-fragment'
Vue.use(Fragment.Plugin)
//重复点击
import VueRouter from 'vue-router';
const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location) {
  return originalPush.call(this, location).catch((err) => err);
};

import './drective/buttonPermission'
//阿里图标
import './assets/icon/iconfont.css'
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
