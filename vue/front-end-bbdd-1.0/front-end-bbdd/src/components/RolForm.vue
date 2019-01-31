<template>
<div class="container">
  <h1>Actualizar rol</h1>
  <form @submit.prevent="updateRol">
        <label for="nombre">Nombre Rol:</label>
        <input required type="text" id="nombre" v-model="Rol.name" class="form-control">
        <input v-if="id" type="submit" value="Actualizar" class="btn btn-primary">
        <button v-else class="btn btn-warning" type="button" @click="add">Añadir <i class="fa fa-pencil"/></button>
    </form>
</div>
</template>

<script>
import * as ApiService from "../services/ApiServiceRol.js";
import { getAllPrivilege } from "../services/ApiServicePrivilege.js";

export default {
  computed: {
    id() {
      return this.$route.params.id || null;
    }
  },
  data() {
    return {
      Rol: {
        name: null,
        id: 0
      }
    };
  },
  methods: {
    getRol(id) {
      if(this.id){
        ApiService.findRol(id)
          .then(rol => {
            this.Rol = rol.data;
          })
          .catch(err => {
            console.error(err);
            alert("Hubo un error");
          });
      }
    },
    updateRol() {
      ApiService.updateRol(this.Rol)
        .then(updated => {
          console.log(updated);
          alert("actualizado");
          this.$router.push('/roles')
        })
        .catch(error => {
          console.error(error);
          alert("hubo un error, mire la consola");
        });
    },
    add(){
      ApiService.addRol(this.Rol).then(()=>{
        this.$router.push('/roles');
      }).catch(error=>{
        console.error(error);
        alert('Hubo un fallo, mire la consola')
      })
    }
  },
  mounted() {
    this.getRol(this.id);
  },
  watch: {
    id(newRole) {
      this.getRol(newRole);
    }
  }
};
</script>
<style scoped>
</style>
