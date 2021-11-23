<template>
  <button
    @click="accionBoton({estado,numero:50})"
  >
    {{textoBoton}}
  </button>
</template>

<script>
import { mapActions, mapMutations, mapState } from 'vuex'
export default {
    props:{
        estado: Boolean
    },
    computed:{
      textoBoton(){
        return this.estado ? 'Aumentar' : 'Disminuir'
      }
    },
    methods:{
      ...mapActions(['accionBoton'])
    }
}
</script>
