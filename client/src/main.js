import Vue from 'vue';
import VModal from 'vue-js-modal';
import VeeValidate from 'vee-validate';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(VModal);
Vue.use(VeeValidate, {
  events: 'blur|input|focus',
});
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
