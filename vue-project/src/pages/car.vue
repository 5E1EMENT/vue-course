<template>
  <div>
    <h1>Car id {{ id }}</h1>

    <button class="btn btn-sm btn-dark mb-2" @click="goBackToCars">Back</button>
    <br>
    <router-link
      class="btn btn-md btn-info mt-3"
      tag="button"
      :to="{name: 'carFull', params: {id}, query: {name:'BMW',year:2000}}"
    >Full info</router-link>
    <hr>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "car",
    data () {
      return {
        // id: this.$router.currentRoute.params['id']
        id: this.$route.params['id']
      }
    },
    methods: {
      goBackToCars () {
        this.$router.push('/cars')
      }
    },
    watch: {
      $route (toR, fromR) {
        this.id = toR.params['id']
      }
    }
  }
</script>

<style scoped>

</style>
