<template>
<div class="container">
  <h1>Usuarios</h1>
  <router-link to="add" append class="btn btn-warning mb-3">Añadir <I class="fa fa-pencil"></I> </router-link>
  <ul class="list-group" v-for="(usuario,i) in usuarios" :key="i">
      <li class="list-group-item d-flex justify-content-between align-items-center  row col-10">
      <I> Usuario: {{usuario.name}} <br> Email: {{usuario.email}} </I>
        <button  type="button" class="btn btn-danger btn-sm  row  col-2" @click="eliminar(usuario.id)">Eliminar  <i class="fa fa-trash-o"></i></button>
        <router-link  class="btn btn-primary btn-sm float-right  row col-2" :to="`update/${usuario.id}`" append>Editar roles <i class="fa fa-pencil"></i></router-link>
      </li>
    </ul>
    <router-view></router-view>
</div>
</template>

<script>

import * as ApiService from '../services/ApiService.js';

export default {
  data() {
    return {
      usuarios: null,
    }
  },
  created() {
     console.log("PROCESS",process.env.VUE_APP_ROOT_API);
      ApiService.allUser().then((res)=>{
        console.log("Bien", res);
        this.usuarios = res.data;
      }).catch((error)=>{
        console.error("Error", error);
        alert("Mira la consola");
      })
  },
  methods: {
    eliminar(id){
      ApiService.deleteUser(id).then((res)=>{
        console.log("Eliminado correctamente", res);
        this.usuarios.splice(this.usuarios.findIndex(e=> e.id == id),1)
      }).catch((error)=>{
        console.error("Error", error);
        alert("Mira la consola");
      })
    }
  }
}
</script>

<style>

</style>
