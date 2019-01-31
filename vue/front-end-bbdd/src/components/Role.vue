<template>
<div>
<div class="container">
    <h1>Roles: </h1>
    <ul class="list-group" v-for="(rol,i) in roles" :key="i">
      <li class="list-group-item d-flex justify-content-between align-items-center row col-9">
        Nombre: {{rol.name}} <br>  ID: {{rol.id_rol}}
        <button  type="button" class="btn btn-danger btn-sm row col-2" @click="eliminar(rol.id_rol)">Eliminar  <i class="fa fa-trash-o"></i></button>
        <button  type="button" class="btn btn-success btn-sm row col-2" @click="mostrarFormulario(rol.id_rol)">Actualizar <i class="fa fa-pencil"></i></button>
      </li>
    </ul>
    <center><button id= "anadir" type="button" class="btn btn-warning" @click="mostrarFormulario()">Añadir <i class="fa fa-pencil"></i></button></center>
</div>
 <div  class="container" v-if="mostrar_form">
      <form @submit.prevent="enviar">
      <label for="nombre">Nombre:</label>
      <input required type="text" id="nombre" v-model="formulario.nombre">
      <input type="checkbox" id="acepto" v-model="formulario.acepta">
      <label for="acepto">Acepto las condiciones</label>
      <input v-if="formulario.acepta" type="submit" value="Enviar">
    </form>
  </div>
</div>
</template>

<script>
import * as ApiService from "../services/ApiServiceRole";
import axios from "axios";

class Formulario{
  constructor() {
        this.ident= null,
        this.nombre= null,
        this.acepta= null
  }
}

export default {
  data() {
    return {
      roles: [],
       mostrar_form: false,
       formulario : new Formulario()
    };
  },
  created() {
    ApiService.allRoles().then(resp => {
      console.log(resp);
      this.roles = resp.data;
    });
  },
  methods: {
    mostrarFormulario(id){
      console.log("Mostrar fomr ", id);

         this.mostrar_form= true;
        this.formulario.ident = id;
    },
    enviar() {
       this.mostrar_form = false;
       const form = {
         id_rol: this.formulario.ident || null,
         name: this.formulario.nombre,
       };
       if (this.formulario.ident == null){
         this.anadir(form);
       }else{
         this.actualizar(form);
       }
      this.mostrar_form= false;
      this.formulario = new Formulario();
     },
     anadir(form){
        console.log("Entro en anadir",form);
     ApiService.addRole(form)
         .then(res => {
           console.log("BIEN", res) //push
           let copiarol = {}
           copiarol.id_rol = res.data.id_rol || null;
           copiarol.name = res.data.name;
           this.roles.push(copiarol);
         })
         .catch(error => {
           console.error("ERROR", error);
         });
     },
     actualizar(form) {
       console.log("Entro en actualizar",form);
      ApiService.updateRole(form)
         .then(res => {
           console.log("BIEN", res)
           let copiaroles = this.roles.find(e => e.id_rol == res.data.id_rol);
           copiaroles.id_rol = res.data.id_rol;
           copiaroles.name = res.data.name;
         })
         .catch(error => {
           console.error("ERROR", error);
         });
     },
     eliminar(id){
        console.log("Eliminar",id);
      alert("Esta seguro que desea eliminar?");
      ApiService.deleteRole(id).then(res =>{
        this.roles.splice( this.roles.findIndex((e)=> e.id_rol == id),1);
      })
      .catch(error=> {console.log("ERROR", error); alert(error);
      });//Splice
     }
  }
};
</script>


<style scoped>

#anadir {
  margin: 2%;
}
</style>
