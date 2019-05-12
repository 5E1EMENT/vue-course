<template>
    <div class="container pt-2">
        <h1>{{text}}</h1>
        <h1 >{{text | lowercase}}</h1>
        <h1 >{{text | uppercase}}</h1>
    </div>
</template>

<script>

export default {
  data() {
    return {
      text: 'Some Text',
      color: 'red'
    }
  },
  components: {},
  computed: {},
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }


}
</script>

<style scoped>

</style>
