<template>
  <div>
    <h2>Car name: {{ $route.query.name }}</h2>
    <h2>Car year: {{ year }}</h2>
  </div>
</template>

<script>
  export default {
    computed: {
      year () {
        return this.$route.query.year
      }
    }
  }
</script>

<style scoped>

</style>
