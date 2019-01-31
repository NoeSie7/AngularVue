export const mixin = {
  created() {
    console.log('Creado desde el mixin');
    this.saludar();
  },
  data () {
    return {
      aprender: [
        {nombre: 'Ionic'},
        {nombre: 'Node'},
        {nombre: 'MongoDB'},
        {nombre: 'Angular'},
      ],
      nuevaTecnologia: null,
    }
  },
  methods: {
        agregarTecnologia() {
            this.aprender.unshift({
              nombre: this.nuevaTecnologia,
            });
          this.nuevaTecnologia = null;
        },
        saludar(){
          alert('Hola desde el Mixin');
        }
   }
};
