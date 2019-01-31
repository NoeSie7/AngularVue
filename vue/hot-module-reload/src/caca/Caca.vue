<template>
  <div >
    <!-- <h1 :class="[$style.rojo]">HOLAAAAAAAA CSS MODULES</h1> -->
    <h1 :class="{[$style.subrayado] : subrayado}" >HOLAAAAAAAA CSS MODULES</h1>
    <h3>{{caca.title}}</h3>
  </div>
</template>

<script>
  export default {
    data() {

      return {
        caca: {title: 'caquita', estado: false},
        loco: {title: 'no caquita loco', estado: false},


        
        subrayado: true
      }
    }
  }
</script>

<style module>
.subrayado {
  text-decoration: underline;
}

.rojo {
  color:red;
}
</style>
