// tarea ajax 

// Vue.component('mis-tareas' , {
//     props:['tareas'],
//     template: `<ul>
//                 <li v-for="tarea in tareas">{{tarea.title}}</li>
//                 </ul>`
// });

// const vm = new Vue ({

//     el: '#app',
//     mounted(){
//         axios.get('https://jsonplaceholder.typicode.com/todos')
//         .then((respuesta) => {
//             console.log('RESPUESTA'+ respuesta);
//             this.tareasAjax = respuesta.data;
//         });
//     },
//     data: {
//         tareasAjax: [],
//         tareasLocales: [
//             {title: 'Hacer al compra'},
//             {title: ' Aprender Vue'},
//             {title: 'Aprender js ES6'}        ]
//     }
// });



// Las tareas
Vue.component('mis-tareas' , {
    template: `<ul>
                <li v-for="tarea in tareas">{{tarea.title}}</li> </ul>`,
    mounted(){
        axios.get('https://jsonplaceholder.typicode.com/todos')
        .then((respuesta) => {
            console.log('RESPUESTA'+ respuesta);
            this.tareas = respuesta.data;
        });
    },
    data() {
        return {
            tareas: [],
        }
    }
});

const vm = new Vue ({

    el: '#app',
   
});