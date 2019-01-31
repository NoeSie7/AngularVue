<template>

    <nav class="navbar navbar-expand-lg navbar-light bg-light">
  <a class="navbar-brand" href="#">Navbar</a>
  <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
  <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
    <div class="navbar-nav">
      <router-link class="nav-item nav-link" active-class="active" to="/user" >Usuario </router-link>
      <router-link class="nav-item nav-link" active-class="active" to="/roles">Role</router-link>
      <router-link class="nav-item nav-link" active-class="active" to="/privilege">Privilegio</router-link>
      <!-- <router-link class="nav-item nav-link" active-class="active" to="/privilegerole">Roles Con privilegios</router-link>
      <router-link class="nav-item nav-link" active-class="active" to="/userroles">Privilegios con roles</router-link> -->
    </div>
  </div>
</nav>

</template>

<script>
export default {

}
</script>

<style scoped>

</style>
