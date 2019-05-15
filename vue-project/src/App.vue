<template>
  <div class="container pt-2">
    <div class="form-group">
      <label for="name">Name</label>
      <input type="text" class="form-control" id="name" v-model.trim="carName">
    </div>
    <div class="form-group">
      <label for="year">Car Year</label>
      <input type="text" class="form-control" id="year" v-model.number="carYear">
    </div>

    <button class="btn btn-success" @click="createCar">Create car</button>
    <button class="btn btn-primary" @click="loadCars">Load cars</button>
    <hr>
    <ul class="list-group">
      <li class="list-group-item" v-for="(car,id) in cars" :key="id">
        <strong>{{car.name}}</strong>
        <span>{{car.year}}</span>
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        carName: '',
        carYear: 2019,
        cars: [],
        resource: null
      }
    },
    methods: {
      createCar () {
        const car = {
          name: this.carName,
          year: this.carYear
        }

        // this.$http.post('http://localhost:3000/cars', car)
        //   .then(response => {
        //     // console.log(response)
        //     return response.json()
        //   })
        //   .then(newCar => {
        //     console.log(newCar)
        //   })
        this.resource.save({}, car)
      },
      loadCars () {
        // this.$http.get('http://localhost:3000/cars')
        //   .then(response => {
        //     // console.log(response)
        //     return response.json()
        //   })
        //   .then(cars => {
        //     this.cars = cars
        //     // console.log(cars)
        //   })
        this.resource.get().then(response => response.json())
          .then(cars => this.cars = cars)
      }
    },
    created () {
      this.resource = this.$resource('http://localhost:3000/cars')
    }

  }
</script>

<style scoped>

</style>
