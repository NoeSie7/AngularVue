const carro = [];

const getters = {
  totalCompra: (state,producto) => state.reduce((total, producto) => total + producto.precio, 0)
};

// const mutation = {
//   comprarProducto: (state, indice) => state.carro.unshift( state.productos[indice]),
//   eliminarProducto: (state, indice) => state.carro.slice(indice,1),
// };


export default {
  state: carro,
  getters: getters,
  // mutation: mutation,
}
