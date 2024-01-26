<template>
  <div>
    <div>
      Esto es Vuelos disponibles
    </div>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <b-row>
      <div>
        <b-button @click="redirigirInicio">
          Atras
        </b-button>
        <b-button @click="redirigirLineasVuelo">
          Siguiente
        </b-button>
      </div>
    </b-row>
  </div>
</template>
  
<script>
export default {
  data() {
    return {
      items: [
        {
          text: 'Inicio',
          href: '#',
          to: "/inicio"
        },
        {
          text: 'Vuelos Disponibles',
          active: true,
        }
      ]
    }
  },
  methods: {
    redirigirInicio() {
      if (this.$route.path == '/inicio') {
        return
      }
      this.$router.push({ path: '/inicio' })
    },
    redirigirLineasVuelo() {
      if (this.$route.path == '/lineasDeVuelo') {
        return
      }
      this.$router.push({ path: '/lineasDeVuelo' })
    },
  }
}
</script>
  
<style></style>