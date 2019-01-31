<template>
  <div id="app">
    <h1>FORMULARIO</h1>
    <hr>
    <form @submit.prevent="enviar">
      <label for="nombre">Nombre:</label>
      <input required type="text" id="nombre" v-model="formulario.nombre">
      <label for="apellidos">Apellidos:</label>
      <input required type="text" id="apellidos" v-model="formulario.apellidos">
      <label for="consulta">Consulta:</label>
      <textarea id="consulta"  rows="5" v-model="formulario.consulta"></textarea>

      <input type="radio" id="si" value="Si" v-model="formulario.cliente">
      <label for="si">Soy cliente</label>
      <br>
      <input type="radio" id="no" value="No" v-model="formulario.cliente">
      <label for="no">No soy cliente</label>
      <br>
      <label for="conocio">¿Donde nos conocio?</label>
      <select id="conocio" v-model="formulario.conocio">
        <option v-for="(opcion, i) in conocio" :value="opcion" :key="i">
          {{opcion}}
        </option>
      </select>
      <input type="checkbox" id="acepto" v-model="formulario.acepta">

      <label for="acepto">Acepto las condiciones</label>
      <input v-if="formulario.acepta" type="submit" value="Enviar">
    </form>
    <hr>
    <pre>
      {{$data}}
    </pre>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
      formulario: {
        nombre: null,
        apellidos: null,
        consulta: null,
        cliente: null,
        conocio: 'Internet',
        acepta: null
      },
      conocio: [
        'Amigo o familiar',
        'Internet',
        'Tv o Radio'
      ]
    }
  },
  methods: {
     enviar() {
       for (let key in this.formulario){
         console.info(`${key} : ${this.formulario[key]}`);
       }
     }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  width: 40%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  align-items: flex-start
}

h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}


form > * {
  display: block;
  margin: .3em 0;
  width: 100%;
}

input [type= checkbox], input[type = radio], input[type = radio] ~ label {
  display: inline-block;
  width: auto;
}
</style>
