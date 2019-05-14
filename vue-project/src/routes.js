import VueRouter from 'vue-router'
import home from './pages/home'
import cars from './pages/cars'

export default new VueRouter({
  routes: [
    {
      path: '', // localhost:8080
      component: home
    },
    {
      path: '/cars', // localhost:8080/cars
      component: cars
    }
  ],
  mode: 'history'
})
