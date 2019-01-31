<template>
<div>


  <div class="container">
    <h1>Usuarios: </h1>
    <ul class="list-group" v-for="(usuario,i) in usuarios" :key="i">
      <li class="list-group-item d-flex justify-content-between align-items-center  row col-10">
      <I> Usuario: {{usuario.name}} <br> Email: {{usuario.email}} </I>
        <button  type="button" class="btn btn-danger btn-sm  row  col-2" @click="eliminar(usuario.id)">Eliminar  <i class="fa fa-trash-o"></i></button>
        <button  type="button" class="btn btn-success btn-sm   row  col-2" @click="mostrarFormulario(usuario)">Actualizar <i class="fa fa-pencil"></i></button>
        <router-link  class="btn btn-primary btn-sm float-right  row col-2" :to="`roles/${usuario.id}`" append>Editar roles <i class="fa fa-pencil"></i></router-link>
      </li>
    </ul>
    <center><button id="anadir" type="button" class="btn btn-warning " @click="mostrarFormulario()">Añadir <i class="fa fa-pencil"></i></button></center>
  </div>
  <div  class="container" v-if="mostrar_form">
      <form @submit.prevent="enviar">
      <label for="nombre">Nombre:</label>
      <input required type="text" id="nombre" v-model="formulario.nombre" class="form-control">
      <label for="email">Email:</label>
      <input required type="text" id="email" v-model="formulario.email" class="form-control">
      <input type="checkbox" id="acepto" v-model="formulario.acepta">
      <label for="acepto">Acepto las condiciones</label>
      <input v-if="formulario.acepta" type="submit" value="Enviar" class="btn btn-primary">
    </form>
  </div>
</div>
</template>

<script>
import * as ApiService from "../services/ApiServiceUser.js";
import axios from "axios";

class Formulario {
  constructor() {
    (this.ident = null),
      (this.nombre = null),
      (this.email = null),
      (this.acepta = null);
  }
}

export default {
  data() {
    return {
      usuarios: [],
      mostrar_form: false,
      formulario: new Formulario()
    };
  },
  created() {
    ApiService.allUser().then(respuesta => {
      console.log(respuesta.data);
      this.usuarios = respuesta.data;
    });
  },
  methods: {
    actualizar(form) {
      console.log("Entro en actualizar", form);
      ApiService.updateUser(form)
        .then(res => {
          console.log("BIEN", res);
          let copiausuarios = this.usuarios.find(e => e.id == res.data.id);
          copiausuarios.id = res.data.id;
          copiausuarios.name = res.data.name;
          copiausuarios.email = res.data.email;
        })
        .catch(error => {
          console.error("ERROR", error);
        });
    },
    anadir(form) {
      console.log("Entro en anadir", form);
      ApiService.addUser(form)
        .then(res => {
          console.log("BIEN", res); //push
          let copiausuarios = {};
          copiausuarios.id = res.data.id || null;
          copiausuarios.name = res.data.name;
          copiausuarios.email = res.data.email;
          this.usuarios.push(copiausuarios);
        })
        .catch(error => {
          console.error("ERROR", error);
        });
    },
    eliminar(id) {
      console.log("Eliminar", id);
      alert("Esta seguro que desea eliminar?");
      ApiService.deleteUser(id).then(res => {
        this.usuarios.splice(
          this.usuarios.findIndex(e => e.id == res.data.id),
          1
        );
      }); //Slice
    },
    mostrarFormulario(usuario = null) {
      this.mostrar_form = true;
      if(usuario){
        this.formulario.nombre = usuario.name;
        this.formulario.email = usuario.email;
        this.formulario.ident = usuario.id;
      }else{
        this.formulario = new Formulario();
      }
    },
    enviar() {
      this.mostrar_form = false;
      const form = {
        id: this.formulario.ident || null,
        name: this.formulario.nombre,
        email: this.formulario.email
      };
      if (this.formulario.ident == null) {
        this.anadir(form);
      } else {
        this.actualizar(form);
      }
      this.mostrar_form = false;
      this.formulario = new Formulario();
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
@import url('../../node_modules/bootstrap/dist/css/bootstrap.min.css');
form > * {
  display: block;
  margin: 0.3em 0;
  width: 20%;
}
input [type="checkbox"],
input[type="radio"],
input[type="radio"] ~ label {
  display: inline-block;
  width: auto;
}

#anadir {
  margin: 2%;
}
</style>

