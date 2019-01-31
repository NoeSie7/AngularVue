<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" active-class="active" to="/" exact>Usuario </router-link>
      <router-link class="nav-item nav-link" active-class="active" to="/role">Role</router-link>
      <router-link class="nav-item nav-link" active-class="active" to="/privilege">Privilegio</router-link>
      <!-- <router-link class="nav-item nav-link" active-class="active" to="/privilegerole">Roles Con privilegios</router-link>
      <router-link class="nav-item nav-link" active-class="active" to="/userroles">Privilegios con roles</router-link> -->
    </div>
  </div>
</nav>
    <router-view></router-view>
  </div>
</template>

<script>
import Privilege from './components/Privilege.vue';
import Role from './components/Role';
// import User from './components/User';
import Usuario from './components/Usuario';
import UserRoles from './components/UserRoles'
import PrivilegeRole from './components/PrivilegeRole'

export default {
  components:{
    Privilege, Role, Usuario, UserRoles, PrivilegeRole
  },
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
