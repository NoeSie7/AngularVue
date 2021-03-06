import Vue from 'vue'
import App from './App.vue'
import {router} from './routes/router';

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
