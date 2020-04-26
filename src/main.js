import Vue from 'vue'
import App from './App.vue'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
import axios from 'axios';
import LwcComponents from '@/components/widget';
import LwcHoc from '@/components/render/hoc';
Vue.config.productionTip = false
window.Vue = Vue;

Vue.use(ElementUI);
Vue.use(LwcComponents);
Vue.component(LwcHoc.name, LwcHoc);

Vue.prototype.$axios = axios;

new Vue({
  render: h => h(App),
}).$mount('#app')
