Vue.component('candidato',{
   /* props: ['nombre', 'correo', 'imagen'],*/
    props: {
        nombre: { 
            type: [String, Array], // null = * es de cualquier tipo
            requerid: true,
        },
        correo: {
            type: String,
            default: 'Juan@wmedia.com'
        },
        imagen: String,
        location: {
            type: Object,
            default() {
                return {
                    ciudad: 'Valencia'
                }
            },
        },
    },
    template : '#candidato-template'
});

new Vue({
    el: '#app',
    mounted() {
        this.obtenerCandidatos();
    },
    data: {
        candidatos: [],
    },
    methods: {
        obtenerCandidatos() {
            axios.get('https://randomuser.me/api/?results=100')
            .then( (respuesta) => {
                console.log(respuesta);
                
                this.candidatos = respuesta.data.results;
            });
        }
    }
});