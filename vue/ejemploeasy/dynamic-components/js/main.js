Vue.component("lista-tareas", {
  template: `<div>
                <h1><slot></slot></h1>
                <ul>
                    <tarea v-for=" tarea in tareas" :tarea="tarea" ></tarea>
                </ul>
              </div>`,
  data() {
      return {
        tareas : [
            'Finalizar seccion de componentes',
            'Iniciar workflow',
            'Terminar de estudiar la documentacion',
            'Seguir jugando con Vue router',
        ]
      }
  }
});

Vue.component("tarea", {
    props: ['tarea'],
    template: `<li> {{tarea}}</li>`
});

Vue.component("contacto", {
   
    template: `<div>
               <a href="mailto: juan@gmail.com">juan@media.es</a><hr> 
               </div>`
});

Vue.component("bio", {
    template: `<div>
                <p>Lorem ipsum dolor sit amet...</p>
              </div>`
});

new Vue({
  el: "#app",
  data: {
      seleccionado: 'lista-tareas'
  }
});
