<template>

  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h2
       :style="colorContador"
    >{{titulo}} {{contador}}
    </h2>

    <button @click="accionIncrementar">Incrementar Contador</button>
    <BtnDisminuir />
    <hr>
    <BotonAccion :estado='true'/>
    <BotonAccion :estado='false'/>
    

  </div>

</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'
import BotonAccion from '../components/BotonAccion.vue'
import BtnDisminuir from '../components/BtnDisminuir.vue'

export default {
  name: 'Home',
  data() {
    return {
      titulo: 'Mi contador Vuex'
    }
  },
    components:{
      BtnDisminuir,
      BotonAccion
    },
  computed:{
    ...mapState(['contador']),
    colorContador(){
      return [this.contador > 100 ? {'color' : 'green'} : {'color': 'red'}]
    }

  },
  methods:{
    ...mapMutations(['incrementar']), //cASI NUNCA LA MUTACION SE TOCA O MODIFICA ALGO DE AQUI
    ...mapActions(['accionIncrementar'])
  }
} 
</script>
