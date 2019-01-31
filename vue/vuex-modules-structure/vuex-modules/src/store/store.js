import Vue from 'vue';
import Vuex from 'vuex';
import productos from './modules/productos.js';
import carro from './modules/carro.js'
import {getters} from './getters.js';
import {mutations} from './mutation.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    //carro: [],
    // productos: [
    //   {nombre : 'Steam Link', precio: 50},
    //   {nombre : 'Steam Controller', precio: 59},
    //   {nombre : 'Axiom Verge', precio: 17},
    // ]
  },
  //getters: getters,
  mutations: mutations,
  modules: {
    productos: productos,
    carro: carro
  }
});
