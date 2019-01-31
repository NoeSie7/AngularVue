var vm = new Vue({
    el: "#app",
    data: {
        vue: {
            exp: null,
            years: 0,
            description: 'descripcion'
        },
        mensaje: 'Hola mundo :)',
        conectado: true,
        edad: 44,
        laborales: ['Lunes', 'Martes', 'Miercoles'],
        tareas: [
            {nombre: 'Hacer la compra', prioridad: true},
            {nombre: 'Aprender Vue y firebase', prioridad: false},
            {nombre: 'Ir al gimnasio', prioridad: false},

        ],
        works: [
            {titulo: 'Hacer la compra', prioridad: true, antiguedad: 12},
            {titulo: 'Aprender Vue y firebase', prioridad: true , antiguedad: 45},
            {titulo: 'Ir al gimnasio', prioridad: false  , antiguedad: 23},
        ],

        juegos: [
            {titulo: 'Battlelfield', genero: 'FPS', puntuacion: 9},
            {titulo: 'Civilization VI', genero: 'Estrategia' , puntuacion: 10},
            {titulo: 'Fornite', genero: 'FPS'  , puntuacion: 6},
        ],
        minimo: 5,
        nuevaTarea: null,
        tarea1: [
            'Aprender Vue js',
            'Aprender ES6',
            'Pulbicar algo todos los dias'
        ],
        persona: {
            nombre: 'Juan',
            profesion: 'Albanil',
            ciudad: 'Valencia'
        },
        busqueda: ''
    },
    computed: { //Los guarda en la cache(propiedad de instancia vu)
        reversedName: function () {
            return this.mensaje.split('').reverse().join('');
        },
        tareasConPrioridad: function () {
            return this.works.filter( (tarea) =>  this.works.prioridad);
        },
        tareasPorAntiguedad() {
            return this.works.sort((a,b) => b.antiguedad - a.antiguedad);
        },
        mejoresJuegos() {
            return this.juegos.filter((juego) => juego.puntuacion >= this.minimo);
        },
        buscarJuego() {
            return this.juegos.filter((juego) => juego.titulo.includes(this.busqueda));
        },
        tareasCompletadas(){
            return this.tareas.filter((tarea) => tarea.prioridad);
        }
    },
    methods: {
        agregarTarea(){
                    this.tarea1.unshift(this.nuevaTarea); 
                    this.nuevaTarea = null;
        },
        completarTarea(tarea) {
            console.log('Tarea' +  tarea);
              tarea.prioridad = !tarea.prioridad;
        }
    }
});

vm.name = 'Noé';