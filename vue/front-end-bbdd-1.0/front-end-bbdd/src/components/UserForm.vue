<template>
<section class="container">
  <h1 v-if="id">Actualizar</h1>
  <h1 v-else>Añadir</h1>
  <form @submit.prevent="enviar">
        <label for="nombre">Nombre:</label>
        <input required type="text" id="nombre" v-model="actualUser.name" class="form-control">
        <label for="email">Email:</label>
        <input required type="text" id="email" v-model="actualUser.email" class="form-control">
        <article class="mr 2" v-if="id">
          <p v-for="(rol,i) in  allRoles" :key="i">
            <input type="checkbox" v-model="actualUser.user_role" :value="rol">
            <span>{{rol.name}}</span>
          </p>
        </article>
         <input v-if="id" type="submit" value="Actualizar" class="btn btn-primary">
        <button v-else id="anadir" type="button" class="btn btn-warning mt-2" @click="anadir">Añadir<i class="fa fa-pencil"></i></button>
    </form>
</section>
</template>

<script>
import * as ApiService from "../services/ApiService.js";
import { getAllRoles } from "../services/ApiServiceRol.js";
export default {
  data() {
    return {
      actualUser: {
        id: 0,
        name: null,
        email: null,
        user_role: null
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
    getUser(id){
      if(id){
      ApiService.findUser(id)
        .then(user => {
          console.log(user.data);
          this.actualUser = user.data;
        })
        .catch(error => {
          console.error(error);
          alert("algo ha fallado");
        });
      }
    },
    enviar(){
      console.log("enviar");
      ApiService.updateUser(this.actualUser).then(res =>{
        alert("todo correcto");
        this.$router.push('/user')
      }).catch(err =>{
        console.error(err);
        alert("Sucedio un error, mire la consola")
      })
    },
    anadir(){
      console.log("añadir");
      ApiService.addUser(this.actualUser).then(res =>{
        alert("todo correcto");
        this.$router.push('/user')
      }).catch(err =>{
        console.error(err);
        alert("Sucedio un error, mire la consola")
      })
    }
  },
  mounted() {
      this.getUser(this.id)
      getAllRoles().then(roles=>{
        console.log(roles);
        this.allRoles = roles.data;
      }).catch(error=>{
        console.error(error);
        alert('hubo un error')
      })
  },
  watch: {
    id(newId) {
      this.getUser(newId)
    }
  }
};
</script>

<style scoped>
</style>
