<template>
  <div>
    <div>
      Esto es Asientos resevados
    </div>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div>
      <b-button @click="redirigirReservasVuelos">
        Atras
      </b-button>
    </div>
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
          text: 'Reservas de vuelos',
          href: '#',
          to: "/reservas"
        },

        {
          text: 'Asientos Reservados',
          active: true,
        }
      ]
    }
  },
  methods: {
    redirigirReservasVuelos() {
      if (this.$route.path == '/reservas') {
        return
      }
      this.$router.push({ path: '/reservas' })
    },
  }
}
</script>
  
<style></style>