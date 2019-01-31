const eventBus = new Vue();

Vue.component("listado-productos", {
  props: ["productos"],
  template: `<section>
                <ul>
                <li v-for="producto in productos">{{producto.nombre}} -
                    <small>{{producto.precio.toFixed(2)}}</small>
                    <button @click="anadirProducto(producto.precio)">+</button>
                    <button @click="eliminarProducto(producto.precio)">-</button>
                </li>
                </ul>
            </section>`,
  methods: {
    eliminarProducto(precio) {
      console.log(precio);
      eventBus.$emit("eliminar", precio);
    },
    anadirProducto(precio) {
      eventBus.$emit("anadir", precio);
    }
  }
});

Vue.component("carrito-compra", {
  template: `<section>
              <h1>{{total.toFixed(2)}} €</h1>  
              <h3>{{cantidadProductos}} productos</h3>
              </section>`,
  data() {
    return {
      cantidadProductos: 0,
      total: 0
    };
  },
  created() {
    eventBus.$on("eliminar", precio => {
      console.error(precio);
      if(this.total > 0){
        this.total -= precio;
      this.cantidadProductos--;
      } 
      
    });
    eventBus.$on("anadir", precio => {
      console.log("Desde el carrito", precio);
      if( this.total >= 0) {
      this.total += precio;
      this.cantidadProductos++;
      }
    });
  }
});

Vue.component("alerta", {
  props: ["tipo", "posicion"],
  template: `
            <section class="alerta" :class="[tipo, posicion]">
                <header class="alerta__header">
                
                    <slot name="header"> Hola</slot>
                    <a  type="button" href="#" @click="ocultarWidget()">Cerrar</a>
                </header>
                <div class="alerta__contenido">
                    <slot>
                    Lorem ipsum sit amet,....
                    </slot>
                </div>
                <footer class="alerta__footer">
                <slot name="footer">Texto Footer</slot>
                </footer>
            
            
            </section>
    
                `,
  methods: {
    ocultarWidget() {
      console.log("LLego ocultar");
      this.$emit("ocultar");
    }
  }
});

new Vue({
  el: "#app",
  data: {
    mostrarExito: false,
    mostrarError: false,
    mostrarAdvertencia: false,
    productos: [
      { nombre: "Libro ES6", precio: 39 },
      { nombre: "Portatil", precio: 339 },
      { nombre: "Cafe", precio: 3 },
      { nombre: "yoghurt", precio: 5 }
    ]
  }
});
