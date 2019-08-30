// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

import Swiper from 'swiper';
import 'swiper/dist/css/swiper.min.css';

Vue.use(ElementUI);

Vue.config.productionTip = false
//路由跳转后，页面回到顶部
router.afterEach(() => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
