<template>
  <div id="app">
    <h1>Aprender en 2017-2018</h1>
    <h4>Se ejecutan primero los mixin y luego los componentes</h4>
    <h5>pero si ejecutamos la misma funcion en el create de mixin y component, se sobreescribira y se ejecutara la ultima que es la del component</h5>
    <form @submit.prevent="agregarTecnologia">
      <input  v-model="nuevaTecnologia" type="text" placeholder="Tecnologia a aprender">
    </form>
    <ul>
      <li v-for="(tecnologia, i) in aprender" :key="i">
        {{tecnologia.nombre}}
      </li>
    </ul>
  </div>
</template>

<script>
import {mixin} from './mixins.js';
export default {
  created() {
    console.log('Creado desde el componente');
    this.saludar();
  },
  mixins: [mixin],
  methods: {
     saludar(){
          alert('Hola desde el Componente');
        }
  }
}

</script>

<style>

</style>
