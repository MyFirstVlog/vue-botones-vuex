<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>Mi Contador {{$store.state.contador}}</h2>
    <input type="text" v-model="texto" />
    <h4>{{texto}}</h4>
  </div>
</template>

<script>
export default {
  data() {
    return {
      texto: ''
    }
  },
}
</script>

<style>

</style>