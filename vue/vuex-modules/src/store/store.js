import Vue from 'vue';
import Vuex from 'vuex';
import productos from './modules/productos.js'

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    carro: [],
    // productos: [
    //   {nombre : 'Steam Link', precio: 50},
    //   {nombre : 'Steam Controller', precio: 59},
    //   {nombre : 'Axiom Verge', precio: 17},
    // ]
  },
  getters: {
    totalCompra: (state) => state.carro.reduce((total, producto) => total + producto.precio, 0)
  },
  mutations: {
    // anadirProducto: (state, producto) => state.productos.unshift(producto),
    comprarProducto: (state, indice) => state.carro.unshift(state.productos[indice]),
    eliminarProducto: (state, indice) => state.carro.slice(indice,1),
  },
  modules: {
    productos: productos
  }
});
