<template>
  <div class="container">
      <h1>Privilegios</h1>
      <router-link to="add" append class="btn btn-warning mb-4">Añadir <I class="fa fa-plus"></I></router-link>
  <ul class="list-group" v-for="(privi,i) in privilegios" :key="i">
      <li class="list-group-item d-flex justify-content-between align-items-center  row col-10">
      <I> Privilegio: {{privi.name}} </I>
        <button  type="button" class="btn btn-danger btn-sm  row  col-2">Eliminar  <i class="fa fa-trash-o"></i></button>
        <router-link  class="btn btn-primary btn-sm float-right  row col-2" :to="`update/${privi.id_privilegio}`" append>Editar roles <i class="fa fa-pencil"></i></router-link>

      </li>
    </ul>
    <router-view></router-view>
  </div>
</template>

<script>

import * as ApiService from "../services/ApiServicePrivilege.js";

export default {
  data() {
    return {
      privilegios: null,
    }
  },
  mounted(){
    ApiService.getAllPrivilege().then(res=>{
      this.privilegios = res.data;
    }).catch(error=>{
      console.error(error);
      alert("ERROR obtener privilegios")
    })
  }
}
</script>

<style scoped>

</style>
