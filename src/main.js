
import Vue from 'vue';
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import VueRouter from 'vue-router';
import Routers from './router/index.js'

Vue.use(ElementUI);
Vue.use(VueRouter);
// 路由配置
const RouterConfig = {
	mode: 'hash',
	base: '/',
	routes: Routers
};
const router = new VueRouter(RouterConfig);

new Vue({
  el: '#app',
  router: router,
  components: { App },
  template: '<App/>'
})