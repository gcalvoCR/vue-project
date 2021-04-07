import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import router from './router/index';
import store from './store/index.js';
import Axios from 'axios'

Vue.prototype.$http = Axios

Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
  store,
  router, 
  render: h => h(App),
}).$mount('#app')
