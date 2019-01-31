Vue.component('autor',{
    props: ['nombre', 'edad'],
    data: {
        function () {
            return {counter: this.nombre} // Como deben utilizarse las props segun VUE---------------------------------------------------------------- MIRAR ESTE CON ABAJO
        }
    },
    mounted() {
        //Las props son accesibles desde this

        //console.log(this.nombre);
        console.log(this.edad);
        console.log(typeof this.edad);
        
        
    },
    template: `<div><h1> {{nombre}}</h1> <button @click="cambiarProp">Cambiar Prop</button></div>`,
    methods: {
        cambiarProp() {
            //this.nombre = this.nombre.toUpperCase(); // MAL cuando trabajas con props ------------------------------------------------------------------- MIRAR ESTE CON ARRIBA
        }
    },
    
});

new Vue({
    el: '#app',
    data: {
        autor: 'Luis',
        yuu: 'Pepe'
    },
});