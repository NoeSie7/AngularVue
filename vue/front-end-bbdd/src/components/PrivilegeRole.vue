<template>
<div>
<div class="container">
  <h1>Roles con Privilegios</h1>
   <ul class="list-group" v-for=" (privi,i) in mostrarUnicoListPrivi" :key="i"> <B>{{privi.name | mayus}}</B>

       <li  class="list-group-item d-flex justify-content-between align-items-center mt-3 row col-10" v-if="privi.role_privilege.length == 0 ">
        <I> Nombre: {{privi.name}}</I>
        <button id="anadir" type="button" class="btn btn-warning row col-2" @click="mostrarFormulario(privi)">Añadir <i class="fa fa-pencil" ></i></button>
      </li>
      <li class="list-group-item d-flex justify-content-between align-items-center row col-9" v-for="(rol,i) in privi.role_privilege " :key="i" v-else>
       <I>Rol: {{rol.name}} <br> RolID: {{rol.id_rol}} <br>Privilegio id: {{privi.id_privilegio}} </I>
        <button  type="button" class="btn btn-danger btn-sm row col-2" @click="eliminar(privi, rol.id_rol)" >Eliminar  <i class="fa fa-trash-o"></i></button>
        <button id="anadir" type="button" class="btn btn-warning row col-2" @click="mostrarFormulario(privi)" >Añadir <i class="fa fa-pencil"></i></button>
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
import * as ApiService from "../services/ApiServicePrivilegeRole.js";

class Rol {
  constructor() {
    (this.id = null), (this.name = null), (this.role_privilege = null);
  }
}

export default {
  data() {
    return {
      privilegioRoles: [],
      rol: new Rol(),
      id_rol_actualizar_viejo: null,
      id_rol_actualizar_nuevo: null,
      mostrar_form: false
    };
  },
  computed: {
    mostrarUnicoListPrivi() {
      return this.privilegioRoles.filter(
        e => e.id_privilegio == parseInt(this.$route.params.id_privi)
      ); //              Id nombre de rutas
    }
  },
  created() {
    ApiService.allPrivilegeRole().then(respuesta => {
      console.log("Privilegio con roles", respuesta.data);
      this.privilegioRoles = respuesta.data;
    });
  },
  methods: {
    anadir() {
      console.log("Añadamos pues");
       console.log("LLEGO A AÑADIR", this.id_rol_actualizar_nuevo, this.rol);
      this.rol.role_privilege.push({ id_rol: this.id_rol_actualizar_nuevo });
      console.log("DESPYES", this.rol);

      ApiService.addRolPrivilege(this.rol)
        .then(res => {
          console.log("BIEN", res);
          this.privilegioRoles.splice(
            this.privilegioRoles.findIndex(e => e.id_privilegio == res.data.id_privilegio),
            1
          );
          this.privilegioRoles.push(res.data);
        })
        .catch(error => {
          console.error("ERROR", error);
        });

      ApiService.allPrivilegeRole().then(respuesta => {
        console.log("Usuarios con roles", respuesta.data);
        this.privilegioRoles = respuesta.data;
      });
    },
    eliminar(privi, rol_id) {
      console.log("entro eliminar");

      console.log(privi, rol_id);
      /*for (let key in privi.role_privilege) {
        if (privi.role_privilege[key].id_rol == rol_id) {
          privi.role_privilege[key] = null;
        }
      }*/
      privi.role_privilege[privi.role_privilege.findIndex(e=> e.id_rol == rol_id)] = null;
      //debugger
      ApiService.updatePrivilegeRole(privi)
        .then(res => {
          //debugger
          console.log("BIEN", res);
          console.warn(res.data);
          console.log(this.privilegioRoles);
          let x = res.data.role_privilege.filter(e => e != null);
          this.privilegioRoles.splice(
            this.privilegioRoles.findIndex(e => e.role_privilege.id_rol == rol_id),
            1
          );
          let y = res.data;
          y.role_privilege = x;
          this.privilegioRoles.push(y);
        })
        .catch(error => {
          console.error("ERROR", error);
        });
    },
    mostrarFormulario(privi, id) {
      console.log("ID", privi, id);
      this.rol = privi;
      this.id_rol_actualizar_viejo = id;
      this.mostrar_form = true;
    },
    enviar() {
      console.log(this.usuario);
      this.mostrar_form = false;
       if (this.id_rol_actualizar_viejo != null) {
         this.actualizar();
       } else {
         this.anadir();
       }
      //this.anadir();
    }
  },
  filters: {
    mayus: function(value) {
      if (!value) return "";
      value = value.toString();
      return value.charAt(0).toUpperCase() + value.slice(1);
    }
  }
};
</script>

<style scoped>
</style>
