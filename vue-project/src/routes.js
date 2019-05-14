import VueRouter from 'vue-router'
import home from './pages/home'
// import cars from './pages/cars'
import car from './pages/car'
import errorCmp from './pages/Error'
import CarFull from './pages/CarFull'

const Cars = resolve => {
  require.ensure(['./pages/cars.vue'], () => {
    resolve(
      require('./pages/cars')
    )
  })
}

export default new VueRouter({
  routes: [
    {
      path: '', // localhost:8080
      component: home
    },
    {
      path: '/cars', // localhost:8080/cars
      component: Cars,
      name: 'cars'
    },
    {
      path: '/car/:id',
      component: car,
      children: [
        {
          path: 'full', // localhost:8080/car/3/full
          component: CarFull,
          name: 'carFull',
          beforeEnter (to, from, next) {
            console.log('beforeEnter');
            next()
            // if(true) {
            //   next(true)
            // } else {
            //   next(false)
            // }

          }
        }
      ]
    },
    {
      path: '/none',
      redirect: {
        name: 'cars'
      }
    },
    {
      path: '*',
      component: errorCmp
    }
  ],
  mode: 'history',
  scrollBehavior (to, from, savedPosition) {

    if(savedPosition) {
      return savedPosition
    }

    if(to.hash) {
      return {selector: to.hash}
    }

    return {
      x: 0,
      y: 500
    }
  }
})
