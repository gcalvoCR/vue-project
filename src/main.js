import Vue from 'vue';
import App from './App.vue';
import VeeValidate from 'vee-validate';
import router from './router';
import store from './store/index.js';

Vue.use(VeeValidate);
Vue.config.productionTip = false

new Vue({
  store,
  router, 
  render: h => h(App),
}).$mount('#app')
