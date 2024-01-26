<template>
  <div>
    <div>
      Esto es Vuelos cancelados
    </div>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <b-row>
      <div>
        <b-button @click="redirigirInicio">
          Atras
        </b-button>
        <b-button @click="redirigirProximosVuelos">
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
          text: 'Vuelos Cancelados',
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
    redirigirProximosVuelos() {
      if (this.$route.path == '/proximosVuelos') {
        return
      }
      this.$router.push({ path: '/proximosVuelos' })
    },
  }
}
</script>
  
<style></style>