const productos = [
  {nombre : 'Steam Link', precio: 50},
  {nombre : 'Steam Controller', precio: 59},
  {nombre : 'Axiom Verge', precio: 17},
];

const mutation = {
  anadirProducto: (state, producto) => productos.unshift(producto),

};

export default {
  state: productos,
  mutations: mutation,
}
