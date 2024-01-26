<template>
  <div>
    <div>
      Esto es Proximos vuelos
    </div>
    <div>
      <b-breadcrumb :items="items"></b-breadcrumb>
    </div>
    <div>
      <b-button @click="redirigirVuelosCancelados">
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
          text: 'Vuelos Cancelados',
          href: '#',
          to: "/vuelosCancelados"
        },
        {
          text: 'Proximos Vuelos',
          active: true,
        },

      ]
    }
  },
  methods: {
    redirigirVuelosCancelados() {
      if (this.$route.path == '/vuelosCancelados') {
        return
      }
      this.$router.push({ path: '/vuelosCancelados' })
    },
  }
}
</script>
  
<style></style>