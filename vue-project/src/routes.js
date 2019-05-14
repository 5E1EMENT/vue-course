import VueRouter from 'vue-router'
import home from './pages/home'
import cars from './pages/cars'
import car from './pages/car'
import CarFull from './pages/CarFull'

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
      component: car,
      children: [
        {
          path: 'full', // localhost:8080/car/3/full
          component: CarFull,
          name: 'carFull'
        }
      ]
    }
  ],
  mode: 'history'
})
