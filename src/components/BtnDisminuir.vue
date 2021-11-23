<template>
  <button @click="accionDecrementar(50)">Disminuir</button>
</template>

<script>
import { mapState, mapMutations, mapActions } from 'vuex'

export default {
    methods:{
        ...mapActions(['accionDecrementar'])
    }
}
</script>
