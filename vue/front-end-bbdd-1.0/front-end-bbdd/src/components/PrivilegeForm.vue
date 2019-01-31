<template>

  <section class="container">
  <h1 v-if="id">Actualizar</h1>
  <h1 v-else>Añadir</h1>
  <form @submit.prevent="enviar">
        <label for="nombre">Nombre:</label>
        <input required type="text" id="nombre" v-model="actualPrivilege.name" class="form-control">

        <article class="mr 2">
          <p v-for="(rol,i) in  allRoles" :key="i">
            <input type="checkbox" v-model="actualPrivilege.role_privilege" :value="rol">
            <span>{{rol.name}}</span>
          </p>
        </article>
        <input v-if="id" type="submit" value="Actualizar" class="btn btn-primary">
        <button v-else id="anadir" type="button" class="btn btn-warning" @click="anadir">Añadir<i class="fa fa-pencil"></i></button>
    </form>
</section>
</template>

<script>
import * as ApiService from "../services/ApiServicePrivilege";
import {getAllRoles} from "../services/ApiServiceRol.js"

export default {
  data() {
    return {
      actualPrivilege: {
        id_privilegio: 0,
        name: null,
        email: null,
        role_privilege:  []
      },
      allRoles:null
    };
  },
  computed: {
    id() {
      return this.$route.params.id || null;
    }
  },
  methods:{
    getPrivilege(id){
      ApiService.findPrivilege(id)
        .then(privi => {
          console.log(privi.data);
          this.actualPrivilege = privi.data;
        })
        .catch(error => {
          console.error(error);
          alert("algo ha fallado");
        });
    },
    enviar(){
      ApiService.updatePrivilege(this.actualPrivilege).then(res =>{
        alert("Actualizaco correctamiente");
        this.$router.push('/privilege')
      }).catch(err =>{
        console.error(err);
        alert("FALLO ACTUALIZAR PRIVI");

      })
    },
    anadir(privi){
      ApiService.addPrivilege(this.actualPrivilege).then(res=>{
        this.$router.push('/privilege')
      }).catch(error=>{
        console.error(error);
        alert('Algo ha fallado, mire la consola')
      })
    }
  },
  mounted() {
    getAllRoles().then(privi=>{
      console.log(privi);
      this.allRoles = privi.data;
    }).catch(error=>{
      console.error(error);
      alert('hubo un error')
    });
    if(this.id){
      this.getPrivilege(this.id);
    }
  },
  watch: {
    id(newId) {
      if(this.id){
        this.getPrivilege(newId)
      }
    }
  }
};
</script>

<style scoped>

</style>
