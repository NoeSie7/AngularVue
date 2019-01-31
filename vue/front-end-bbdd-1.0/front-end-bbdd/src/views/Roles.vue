<template>
  <div class="container">
    <h1>Roles</h1>
    <router-link to="add" append class="btn btn-warning mb-4">Añadir <I class="fa fa-plus"></I></router-link>
    <ul class="list-group" v-for="(rol,i) in roles" :key="i">
      <li class="list-group-item d-flex justify-content-between align-items-center  row col-10">
      <I> Rol: {{rol.name}} </I>
        <button  type="button" class="btn btn-danger btn-sm  row  col-2" @click="eliminar(rol.id_rol)">Eliminar  <i class="fa fa-trash-o"></i></button>
        <router-link  class="btn btn-primary btn-sm float-right  row col-2" :to="`update/${rol.id_rol}`" append>Editar roles <i class="fa fa-pencil"></i></router-link>
      </li>
    </ul>

    <router-view></router-view>
  </div>
</template>
<script>
import * as ApiService from "../services/ApiServiceRol.js";
export default {
  created() {
    ApiService.getAllRoles().then((res)=>{

        this.roles = res.data;
    }).catch((err)=> {console.log(err);})

  },
  data() {
    return {
      roles: null
    };
  },
  methods: {
    eliminar(id){
      ApiService.deleteRol(id).then(res => {
        alert("Todo correcto");
        this.roles.splice( this.roles.findIndex(e => e.id_rol = id),1);
      }).catch(err => {
        console.error(err);
      })
    }
  }
};
</script>
<style scoped>
</style>
