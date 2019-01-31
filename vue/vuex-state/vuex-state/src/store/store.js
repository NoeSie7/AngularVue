import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    nombre: 'Pepe',
    apellidos: 'nuñez charro',
    profesion: 'Albañil',
    ciudad: 'Pamplona',
    tareas: [
      {nombre: 'Aprender Vue Routing', completado: false},
      {nombre: 'Organizar lecciones restantes', completado: true},
      {nombre: 'Grabar lecciones mini curso', completado: false},
      {nombre: 'Diseñar acciones de marketing', completado: false},
    ]
  },
  getters: {
    tareasCompletadas: (state) => {
      return state.tareas.filter((tarea)=> tarea.completado).lenght;
    }
  }
});
