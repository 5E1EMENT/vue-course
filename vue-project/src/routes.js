import VueRouter from 'vue-router'
import home from './pages/home'
import cars from './pages/cars'
import car from './pages/car'

export default new VueRouter({
  routes: [
    {
      path: '', // localhost:8080
      component: home
    },
    {
      path: '/cars', // localhost:8080/cars
      component: cars
    },
    {
      path: '/car/:id',
      component: car
    }
  ],
  mode: 'history'
})
