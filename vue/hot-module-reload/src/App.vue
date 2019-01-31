<template>
<div>
  <h1>Menu Principal</h1>
  <input type="range">
  <ul>
    <li><a href="">Enlace 1</a></li>
    <li><a href="">Enlace 2</a></li>
    <li><a href="">Enlace 3</a></li>
    <li><a href="">Enlace 4</a></li>
    <li><a href="">Enlace 5</a></li>
    <li><a href="">Enlace 6</a></li>
  </ul>



  <tareas></tareas>
  <caca></caca>
</div>
</template>

<script>
 import Tareas from './tareas/Tareas.vue';
 import Caca from './caca/Caca.vue';
export default {
  components: {Tareas, Caca},
  data () {
    return {

    }
  }
}
</script>

<style>

</style>
