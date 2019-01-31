<template>

<div>
<div class="container">
    <h1>Usuarios con Roles: </h1>
    <ul class="list-group" v-for=" (usurol,i) in mostrarUnicoList" :key="i"> <B>{{usurol.name | mayus}}</B>
      <li  class="list-group-item d-flex justify-content-between align-items-center mt-3" v-if="usurol.user_role.length == 0 ">
        <I>Email: {{usurol.email}}</I>
        <button id="anadir" type="button" class="btn btn-warning" @click="mostrarFormulario(usurol)">Añadir <i class="fa fa-pencil"></i></button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center" v-for="(rol,y) in usurol.user_role " :key="'s'+y" v-else>
       <I>Rol: {{rol.name}} <br> RolID: {{rol.id_rol}} <br>Userid: {{usurol.id}}</I>
        <button  type="button" class="btn btn-danger btn-sm" @click="eliminar( usurol, rol.id_rol)">Eliminar  <i class="fa fa-trash-o"></i></button>
        <button  type="button" class="btn btn-success btn-sm" @click="mostrarFormulario(usurol, rol.id_rol)">Actualizar <i class="fa fa-pencil"></i></button>
        <button id="anadir" type="button" class="btn btn-warning" @click="mostrarFormulario(usurol)">Añadir <i class="fa fa-pencil"></i></button>
      </li>

    </ul>

  </div>
   <div  class="container" v-if="mostrar_form">
      <form @submit.prevent="enviar">
      <label for="nombre">Nombre:</label>
      <input required type="text" id="id_rol_actualizar_nuevo" v-model="id_rol_actualizar_nuevo">

      <input type="submit" value="Enviar">
    </form>
  </div>
  </div>
</template>

<script>
import * as ApiService from "../services/ApiServiceUserRole.js";

class Usuario {
  constructor() {
    (this.id = null),
      (this.name = null),
      (this.email = null),
      (this.user_role = null);
  }
}

export default {
  data() {
    return {
      usuariosRoles: [],
      mostrar_form: false,
      id_rol_actualizar_viejo: 0,
      id_rol_actualizar_nuevo: 0,
      id_user_actualizar: 0,
      usuario: new Usuario()
    };
  },
  created() {
    ApiService.allUserRole().then(respuesta => {
      console.log("Usuarios con roles", respuesta.data);
      this.usuariosRoles = respuesta.data;
    });
  },
  computed: {
    mostrarUnicoList() {
      return this.usuariosRoles.filter(
        e => e.id == parseInt(this.$route.params.id)
      );
    }
  },
  methods: {
    actualizar() {
      console.log("Actualizar USU", this.usuario);
      console.log("ID", this.id_rol_actualizar_nuevo);
      for (let key in this.usuario.user_role) {
        if (
          this.usuario.user_role[key].id_rol == this.id_rol_actualizar_viejo
        ) {
          this.usuario.user_role[key].id_rol = this.id_rol_actualizar_nuevo;
        }
      }
      ApiService.updateUserRole(this.usuario)
        .then(res => {
          console.log("BIEN", res);
        })
        .catch(error => {
          console.error("ERROR", error);
        });
    },
    eliminar(usu, rol_id) {
      console.log(usu, rol_id);
     for (let key in usu.user_role) {
        if (usu.user_role[key].id_rol == rol_id) {
          usu.user_role[key] = null;
        }
      }
      console.log("DESPUES", usu);
      ApiService.updateUserRole(usu)
        .then(res => {
          console.log("BIEN", res);
          console.warn(res.data);
          let x = res.data.user_role.filter(e=> e!= null);
         this.usuariosRoles.splice(
            this.usuariosRoles.findIndex(e => e.id == rol_id),
            1
          );
          let y =res.data;
          y.user_role = x;
           this.usuariosRoles.push(y);
        })
        .catch(error => {
          console.error("ERROR", error);
        });
    },
    enviar() {
      console.log(this.usuario);
      this.mostrar_form = false;
      if (this.id_rol_actualizar_viejo != null) {
        this.actualizar();
      } else {
        this.anadir();
      }
    },
    anadir() {
      console.log("LLEGO A AÑADIR", this.id_rol_actualizar_nuevo, this.usuario);
      this.usuario.user_role.push({ id_rol: this.id_rol_actualizar_nuevo });
      console.log("DESPYES", this.usuario);

      ApiService.addUserRol(this.usuario)
        .then(res => {
          console.log("BIEN", res);
          this.usuariosRoles.splice(
            this.usuariosRoles.findIndex(e => e.id == res.data.id),
            1
          );
          this.usuariosRoles.push(res.data);
        })
        .catch(error => {
          console.error("ERROR", error);
        });

      ApiService.allUserRole().then(respuesta => {
        console.log("Usuarios con roles", respuesta.data);
        this.usuariosRoles = respuesta.data;
      });
    },
    mostrarFormulario(usurol, id) {
      console.log("ID", usurol, id);
      this.usuario = usurol;
      this.id_rol_actualizar_viejo = id;
      this.mostrar_form = true;
    }
  },
  filters: {
    mayus: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  },
  watch: {
    usuario: {
      handler(newValue) {
        console.log("Se ha cambiado el estado de usuaripos" + newValue);
      },
      deep: true
    }
  }
};
</script>

<style scoped>
</style>
