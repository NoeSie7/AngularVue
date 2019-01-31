Vue.component('mis-tareas',{
    props: ['listado'],
    template: "#mis-tareas-template"
});

new Vue ({
    el: '#app',
    data: {
        tareas: [
            {titulo: 'Salir a correr'},
            {titulo: 'Recoger la casa'},
            {titulo: 'Aprender Vue.js'},
            {titulo: 'Ir al gimnasio'}
        ]
    }
});