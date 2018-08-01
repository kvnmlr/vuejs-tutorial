import Vue from 'vue';
import App from './components/App.vue';
import VueResource from 'vue-resource';

export const bus = new Vue();

Vue.use(VueResource);

Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App)
});