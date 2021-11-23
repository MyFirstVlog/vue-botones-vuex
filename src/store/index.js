import { createStore } from 'vuex'

export default createStore({
  state: {
    contador:150
  },
  mutations: {
    incrementar(state, payload){
        state.contador += payload
    },
    decrementar(state, payload){
      state.contador -= payload
    }
  },
  actions: {
    //modificar el state
    accionIncrementar({commit} ){  // cometer o ejecuta una mutacion
        commit('incrementar', 10)
    },
    accionDecrementar({commit}, numero){
      commit('decrementar', numero)
    },
    accionBoton({commit}, objeto){
      if(objeto.estado){
        commit('incrementar', objeto.numero)
      }else{
        commit('decrementar', objeto.numero)
      }
    }
    
  },
  modules: {
  }
})
