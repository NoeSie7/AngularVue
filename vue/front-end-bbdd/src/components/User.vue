<template>
<div>
  <div class="container">
    <h1>Users</h1>
    <ul v-for="(usuario,i) in usuarios" :key="i" class="list-group list-group-flush">
      <li class="list-group-item" >Identificador: {{usuario.id}} <br> Nombre: {{usuario.name}} <br> Email: {{usuario.email}}</li>

      <!-- <li class="list-group-item">Email: {{usuario.email}}</li> -->
    </ul>
    <button type="button" class="btn btn-success" @click="mostrarForm()">Añadir</button>
    <button type="button" class="btn btn-primary" @click="mostrarForm()">Buscar</button>
    <button type="button" class="btn btn-primary" @click="mostrarForm()">Borrar</button>
    <button type="button" class="btn btn-primary" @click="mostrarForm()">Update</button>
  </div>
  <div  class="container" v-if="mostrar_form">
      <form @submit.prevent="enviar">
      <label for="nombre">Id:</label>
      <input required type="text" id="ident" v-model="formulario.ident">
      <label for="nombre">Nombre:</label>
      <input required type="text" id="nombre" v-model="formulario.nombre">
      <label for="email">Email:</label>
      <input required type="text" id="email" v-model="formulario.email">
      <input type="checkbox" id="acepto" v-model="formulario.acepta">
      <label for="acepto">Acepto las condiciones</label>
      <input v-if="formulario.acepta" type="submit" value="Enviar">
    </form>
  </div>

</div>
</template>

<script>
import * as ApiService from "../services/ApiServiceUser.js";
import axios from "axios";

export default {
  data() {
    return {
      usuarios: [],
      mostrar_form: false,
      formulario: {
        ident: null,
        nombre: null,
        email: null,
        acepta: null
      }
    };
  },
  created() {
    ApiService.allUser().then(respuesta => {
      console.log(respuesta.data);
      this.usuarios = respuesta.data;
    });
  },
  methods: {
    mostrarForm() {
      this.mostrar_form = true;
    },
    // enviar() { // Update
    //   for (let key in this.formulario) {
    //     console.info(`${key} : ${this.formulario[key]}`);
    //   }.
    //   this.mostrar_form = false;
    //   const form = {
    //     id: this.formulario.ident,
    //     name: this.formulario.nombre,
    //     email: this.formulario.email
    //   };
    //   console.log("FOOOOOORM", form);
    //   ApiService.updateUser(form)
    //     .then(res => {
    //       console.log("BIEN", res);

    //       let copiausuarios = this.usuarios.find(e => e.id == res.data.id);
    //       copiausuarios.id = res.data.id;
    //       copiausuarios.name = res.data.name;
    //       copiausuarios.email = res.data.email;
    //     })
    //     .catch(error => {
    //       console.error("ERROR", error);
    //     });
    // }
    enviar() { //delete
      for (let key in this.formulario) {
        console.info(`${key} : ${this.formulario[key]}`);
      }
      ApiService.deleteUser(this.formulario.ident);
    }
  },
  watch: {
    usuarios: {
      handler: newValue => {
        console.log("Se ha cambiado el estado de usuaripos");
      },
      deep: true
    }
  }
};
</script>

<style scoped>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  width: 40%;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  align-items: flex-start;
}

h1,
h2 {
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
  margin: 0.3em 0;
  width: 100%;
}

input [type="checkbox"],
input[type="radio"],
input[type="radio"] ~ label {
  display: inline-block;
  width: auto;
}
</style>

