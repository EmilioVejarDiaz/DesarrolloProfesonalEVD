import vueRouter from 'vue-router';
import Vue from 'vue';



Vue.use(vueRouter);

const routes = [
{
    path: '/',
    redirect: '/inicio'
},
{
    path:'*',
    component: () => import('../components/screens/ErrorPages/Error404.vue')
},

{
    path:'/',
    component:{
        render (c){
            return c('router-view')
        }
    },
    children: [
        {
            path:'/layout',
            name:'layout',
            component: () => import('../components/screens/Layout.vue'),

            children: [
                {
                    path:'/inicio',
                    name:'inicio',
                    component: () => import('../components/screens/Inicio.vue')
                },
                {
                    path: '/formulario',
                    name: 'formulario',
                    component: () => import('../components/screens/Formulario.vue')
                },
                {
                    path:'/reservas',
                    name:'reservas',
                    component: () => import('../components/screens/Reservas.vue')
                },
                {
                    path:'/vuelosDisponibles',
                    name:'vuelosDisponibles',
                    component: () => import('../components/screens/VuelosDisponibles.vue')
                },
                {
                    path:'/vuelosCancelados',
                    name:'vuelosCancelados',
                    component: () => import('../components/screens/VuelosCancelados.vue')
                },
                {
                    path:'/asientosReservados',
                    name:'asientosReservados',
                    component: () => import('../components/screens/AsientosReservados.vue')
                },
                {
                    path:'/lineasDeVuelo',
                    name:'lineasDeVuelo',
                    component: () => import('../components/screens/LineasDeVuelo.vue')
                },
                {
                    path:'/proximosVuelos',
                    name:'proximosVuelos',
                    component: () => import('../components/screens/ProximosVuelos.vue')
                },
                
    
            ]
        }, 
        
    ]

}
]

const router = new vueRouter({routes})
export default router;



