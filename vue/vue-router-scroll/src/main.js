import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
// import Bio from './components/Bio.vue';
import Info from './components/Info.vue'


const Bio = resolve => {
  require.ensure(['./components/Bio.vue'], () => {
      resolve(require('./components/Bio.vue'));
  });
};
/*Router*/
Vue.use(VueRouter);

const routes = [
  {path: '/', component: Info},
  {path: '/bio', component: Bio}
];

const router = new VueRouter({
  routes: routes,
  mode: 'history',

  scrollBehavior(to, from, savedPosition){
    const position = {};
    console.log(to);

    if(to.hash) {
      position.selector = to.hash;
    }else{
      position.x = 200;
      position.y= 100;
    }

      return position;
  }
})

new Vue({
  el: '#app',
  router: router,
  render: h => h(App)
})
