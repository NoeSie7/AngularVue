<template>
<div>
  <h1>{{ cantidad}} total </h1>
  <button @click="aumentarAsync(12)">Aumentar</button>
  <button @click="reducirAsync({cantidad: 15})">Reducir</button>
</div>
</template>

<script>
import {mapMutations,mapState, mapActions} from 'vuex';

export default {
  computed: mapState(['cantidad']), //Mapeado de la variable que voy a usar como resultado
 // methods: mapMutations(['aumentar','reducir']) //metodos mapeados

//  methods: { // Otra manera de hacerlo
//    aumentar() {
//      //this.$store.commit('aumentar'); //esto es una mutation
//      this.$store.dispatch('aumentarAsync');
//    },
//    reducir() {
//      //this.$store.commit('reducir');
//       this.$store.dispatch('reducirAsync');
//    }
//  }
methods: mapActions(['aumentarAsync', 'reducirAsync'])
}


</script>

<style>

</style>
