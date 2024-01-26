<template>
  <div>
    <div>
      Esto es Reservas
    </div>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <b-row>
      <div>
        <b-button @click="redirigirInicio">
          Atras
        </b-button>
        <b-button @click="redirigirAsientosreservados">
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
          text: 'Reservas de vuelos',
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
    redirigirAsientosreservados() {
      if (this.$route.path == '/asientosReservados') {
        return
      }
      this.$router.push({ path: '/asientosReservados' })
    },
  }
}
</script>

<style></style>