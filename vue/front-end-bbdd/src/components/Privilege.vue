<template>
<div>
<div class="container">
<h1>Privilegios: </h1>
  <ul class="list-group" v-for="(privilegio,i) in privilegios" :key="i">
      <li class="list-group-item d-flex justify-content-between align-items-center row col-9">
        Nombre: {{privilegio.name}} <br>  ID: {{privilegio.id_privilegio}}
        <button  type="button" class="btn btn-danger btn-sm row col-2" @click="eliminar(privilegio.id_privilegio)">Eliminar<i class="fa fa-trash-o"></i></button>
        <button  type="button" class="btn btn-success btn-sm row col-2" @click="mostrarFormulario(privilegio.id_privilegio)">Actualizar <i class="fa fa-pencil"></i></button>
        <router-link  class="btn btn-primary btn-sm row col-2" :to="`${privilegio.id_privilegio}`" append>Editar roles <i class="fa fa-pencil"></i></router-link>
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
import * as ApiService from '../services/ApiServicePrivilegios.js'

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
      mostrar_form: false,
      privilegios: [],
      formulario : new Formulario()
    }
  },
  created() {
    ApiService.allPrivileges().then(respuesta => {
      console.log(respuesta.data);
      this.privilegios = respuesta.data;
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
     ApiService.addPrivilegio(form)
         .then(res => {
           console.log("BIEN", res) //push
           let copiaprivilegio = {}
           copiaprivilegio.id_privilegio = res.data.id_privilegio || null;
           copiaprivilegio.name = res.data.name;
           this.privilegios.push(copiaprivilegio);
         })
         .catch(error => {
           console.error("ERROR", error);
         });
     },

     eliminar(id){
        console.log("Eliminar",id);
      alert("Esta seguro que desea eliminar?");
      ApiService.deletePrivilegio(id).then(res =>{
        this.privilegios.splice( this.privilegios.findIndex((e)=> e.id_privilegios == res.data.id_privilegios),1);
      }).catch((error) => {console.error(error); alert(error);}
      );//Splice
     }
  }
};
</script>


<style scoped>
#anadir {
  margin: 2%;
}
</style>
