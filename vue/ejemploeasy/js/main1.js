//Vue.prototype.$http = axios; pasar de vue resources a axios

var vm1 = new Vue({

    el: '#app',
    data: {
        personas: [],
    mostrar: true,
    mensajes: {
        transicion: 'Transiciones CSS con Vue.js',
        animacion: 'Animaciones Css con Vue.js',
        animationCustom: 'Animaciones Custom Css Con Vue.js',
        entreElementos: 'Transiciones entre elementos con Vue.js'
         }
    },
    mounted() {
        console.log('Instancia montada');
        //this.cargarPersonas();
        this.cargarPersonasaxios();
        
    }, 
    methods:{
        cargarPersonas() { // Vue Resource
        this.$http.get('https://randomuser.me/api/?results=500')
            .then((respuesta) => {
                console.log('Respuesta' + respuesta);
                this.personas = respuesta.body.results;
            });
        },
        cargarPersonasaxios() {
            axios.get('https://randomuser.me/api/?results=500')
                .then((respuesta)=>{
                    console.log('Respuesta' +  respuesta);
                    this.personas = respuesta.data.results;
                })
        }

    }

});