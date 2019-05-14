<template>
  <div>
    <h2>Car name: {{ $route.query.name }}</h2>
    <h2>Car year: {{ year }}</h2>

    <div class="scroll"></div>
    <h3 id="scroll">Hello from bottom</h3>
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
  .scroll {
    width: 100px;
    height: 1200px;
    background-color: #ccc;
  }

</style>
