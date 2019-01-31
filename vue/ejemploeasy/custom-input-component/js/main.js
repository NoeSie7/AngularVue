Vue.component('contrasenia',{
    props: ['contrasena'],
    template: `<input :value="contrasena" @input="comprobarContrasena($event.target.value)" ref="pass">`,
    methods: {
        comprobarContrasena(contrasena) {
                if(this.noValidas.includes(contrasena)) {
                    this.$refs.pass.value = contrasena = '';
                    
                }
                this.$emit('input',contrasena);
        }
    },
    data() {
        return {
            noValidas: ['abc','123456', 'admin' , 'root']
        }
    }
});

new Vue ({
    el: '#app',
    data: {
        contrasena: 'es3Es653!*&_', 
    }
});