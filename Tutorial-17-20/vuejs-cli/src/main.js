import Vue from 'vue';
import App from './components/App.vue';
import VueRouter from 'vue-router';
import VueResource from 'vue-resource';
import Routes from './routes'

export const bus = new Vue();

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  mode: 'history',
  routes: Routes
});

Vue.filter('to-uppercase', function(value) {
  return value.toUpperCase();
});

new Vue({
  el: '#app',
  render: h => h(App),
  router: router
});