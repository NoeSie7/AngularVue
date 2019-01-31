Vue.component('lista-tareas',{
    props: ['todastareas'],
    template: `<div>
                <h1> <slot></slot></slots></h1>  
                <ul>
                <tarea v-for= "tarea in todastareas" :unatarea="tarea" ></tarea>
                </ul>
              </div>`,
});

Vue.component('tarea',{
    props: ['unatarea'],
    template: `<li>{{unatarea}}</li>`,
});

new Vue ({
    el: '#app',
    data : {
        tareas : [
            'Finalizar seccion de componentes',
            'Iniciar workflow',
            'Terminar de estudiar la documentacion',
            'Seguir jugando con Vue router',
        ]
    }
});