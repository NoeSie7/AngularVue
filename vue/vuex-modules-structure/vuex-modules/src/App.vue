<template>
 <div>
  <productos></productos>
  <carro></carro>
 </div>

</template>

<script>
import Productos from './components/Productos'
import Carro from './components/Carro'

export default {
  components: {
    Productos, Carro
  },
  data() {
    return {};
  }
};
</script>

<style>
</style>
