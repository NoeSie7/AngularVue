import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);


export const store = new Vuex.Store({
  state: {
    cantidad: 0,
  },
  mutations: {
    aumentar: (state, cantidad) => state.cantidad += cantidad,
    reducir: (state, cantidad) => state.cantidad -= cantidad,
  },
  actions: {
    aumentarAsync: (context, cantidad) => {
      setTimeout(() => context.commit('aumentar', cantidad),2000);
    },
    reducirAsync: ({commit}, {cantidad}) => { //Con esto cogo lo que a mi me interesa del array en vez de pasarle context y valor para ver cantidad
      setTimeout (() => commit('reducir', cantidad),2000);
    }
  }
});
