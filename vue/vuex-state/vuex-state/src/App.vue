<template>
<main>
    <!-- <div>
        <h1>Hola me llamo {{nombre}} {{apellidos}}</h1>
        <h2>Profesion: {{profesion}}</h2>
    </div> -->
  <tareas-restantes></tareas-restantes>
    <div>
      <ul>
        <li v-for="(tarea,i) in tareas" :key="i">
          {{tarea.nombre}}
        </li>
      </ul>
    </div>
</main>
</template>

<script>
import TareasRestantes from './components/TareasRestantes'
import {mapState} from 'vuex';
export default {
  components: {TareasRestantes},
  // computed: {
  //   nombre() {
  //     return this.$store.state.nombre;
  //   }
  // }

  // computed: mapState({
  //   nombre: function(state) { // Es lo mismo esto que lo de abajo
  //     return state.nombre;
  //   },
  //   apellidos: (state) => state.apellidos // return implicito
  // })


  // computed: mapState(['nombre','apellidos', 'profesion'])

// -------------------------------------------------------------------
  // computed: {
  //   tareas(){
  //     return this.$store.state.tareas;
  //   }
  // }
  computed: mapState(['tareas'])
// ---------------------------------------------------------------------
}
</script>

<style>

</style>
