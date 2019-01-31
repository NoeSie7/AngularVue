import Vue from 'vue'
import App from './App.vue'
import {store} from './store/store'; //Importamos store para que se vea en cualquier lado

new Vue({
  el: '#app',
  store,
  render: h => h(App)
});


