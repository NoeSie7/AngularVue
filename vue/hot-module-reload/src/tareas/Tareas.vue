<template>
  <div>
    <h2>Tareas por hacer</h2>
    <ul>
      <li v-for="(tarea,i) in tareasPendientes" :key="i">
        <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
      </li>
    </ul>
    <h2>Las tareas finalizadas</h2>
    <li v-for="(tarea,i) in tareasFinalizadas" :key="i">
      <a href="#" @click="actualizarTarea(tarea)" v-text="tarea.nombre"></a>
    </li>
  </div>
</template>

<script>
export default {

  data () {
    return {
      tareas: [
        {nombre: 'Aprender Vue.js', completado: false},
        {nombre: 'Grabar el modelo de Vue', completado: false},
        {nombre: 'Responder comentarios de una vez', completado: false},
        {nombre: 'Salir a correr', completado: false},
        {nombre: 'Diseñar el ejercicio final', completado: false},
      ],
      finalizadas: []
    }
  },
  methods: {
    actualizarTarea(tarea){
      tarea.completado = !tarea.completado;
    }

  },
  computed: {
    tareasFinalizadas() {
      return this.tareas.filter((tarea)=> tarea.completado);
    },

    tareasPendientes() {
      return this.tareas.filter((tarea) => !tarea.completado );
    }
  }
}
</script>

<style scoped>
  li a {
    color:red;

  }
</style>
