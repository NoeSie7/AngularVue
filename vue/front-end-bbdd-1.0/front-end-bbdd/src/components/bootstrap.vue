<template>
<div>
  <Navbar></Navbar>
  <router-view></router-view>
</div>
</template>

<script>
import NavbarComponent from "../components/Navbar";

export default {
  components: {Navbar: NavbarComponent }
}
</script>
