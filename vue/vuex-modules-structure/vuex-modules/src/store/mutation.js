export const mutations = {
  // anadirProducto: (state, producto) => state.productos.unshift(producto),
  comprarProducto: (state, indice) => state.carro.unshift( state.productos[indice]),
  eliminarProducto: (state, indice) => state.carro.slice(indice,1),
};
