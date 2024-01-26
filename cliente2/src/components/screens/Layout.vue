<template>
    <div>
    <div id="nav">
      <b-row>
        <div>
          <b-nav tabs>
            <b-nav-item active>Active</b-nav-item>
            <b-nav-item>Link</b-nav-item>
            <b-nav-item>Another Link</b-nav-item>
            <b-nav-item disabled>Disabled</b-nav-item>
          </b-nav>
        </div>
      </b-row>
      <b-row>
        <div id="side">
  
  
          <b-button v-b-toggle.sidebar-right>
            <b-icon-list></b-icon-list>
          </b-button>
          <b-sidebar id="sidebar-right" title="Sidebar" right shadow>
            <div class="px-3 py-2">
              <div id="opcSide">
  
                <b-button @click="redirigirReservas" size="sm" variant="primary" class="mb-2">Reservas de Vuelos</b-button>
                <b-button @click="redirigirVuelosDisp" size="sm" variant="primary" class="mb-2">Vuelos Disponibles</b-button>
                <b-button @click="redirigirVuelosCanc" size="sm" variant="primary" class="mb-2">Vuelos Cancelados</b-button>
                <b-button @click="redirigirForm" size="sm" variant="primary" class="mb-2">Formulario</b-button>
              </div>
            </div>
          </b-sidebar>
        </div>
      </b-row>
      
    </div>
    <div>
      
    </div>
    <router-view>
   
  
  
    
  </router-view>
  
  <b-col>
  
  
  
  </b-col>
  </div>
    
   
  </template>
  <script>
  export default {
    methods: {
      redirigirReservas() {
        if (this.$route.path == '/reservas') {
          return
        }
        this.$router.push({ path: '/reservas' })
      },
      redirigirVuelosDisp() {
        if (this.$route.path == '/vuelosDisponibles') {
          return
        }
        this.$router.push({ path: '/vuelosDisponibles' })
      },
      redirigirVuelosCanc() {
        if (this.$route.path == '/vuelosCancelados') {
          return
        }
        this.$router.push({ path: '/vuelosCancelados' })
      },
      redirigirForm() {
        if (this.$route.path == '/formulario') {
          return
        }
        this.$router.push({ path: '/formulario' })
      }
    }
  }
  </script>
  
  <style scoped>
  #nav {
    background-color: #f5f5f5;
    border-bottom: 1px solid #648d92;
    border-top: 1px solid #e3e3e3;
    padding: 0.5rem 1rem;
    margin-bottom: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
  
  #side {
    display: flex;
    justify-content: space-between;
    align-items: center;
  
  }
  
  #opcSide {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  
  }
  
  #info {
    width: 60%;
    margin-top: 50px;
    margin-left: 40px;
  
    }
  
    b-text {
      font-size: 15px;
      text-align: justify;
    }
  
    #texto {
      margin-top: 50px;
      width: 70%;
      margin-left: 40px;
  }
  </style>
  