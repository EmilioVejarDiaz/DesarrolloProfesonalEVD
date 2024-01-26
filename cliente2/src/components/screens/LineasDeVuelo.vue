<template>
  <div>
    <div>
      Esto es Lineas de vuelo
    </div>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <b-row>
      <div>
        <b-button @click="redirigirVuelosDisponibles">
          Atras
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
          href: '#',
          to: "/vuelosDisponibles"
        },

        {
          text: 'Lineas de vuelo',
          active: true,
        }
      ]
    }
  },
  methods: {
    redirigirVuelosDisponibles() {
      if (this.$route.path == '/vuelosDisponibles') {
        return
      }
      this.$router.push({ path: '/vuelosDisponibles' })
    },
  }
}
</script>
  
<style></style>