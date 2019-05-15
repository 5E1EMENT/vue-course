<template>
  <div class="container pt-2">
    <h1>{{title}}</h1>
    <hr>
    <app-counter></app-counter>
    <app-actions></app-actions>
    <!--<app-second-counter></app-second-counter>-->
    <hr>

  </div>
</template>

<script>

  import Counter from './counter'
  // import SecondCounter from './SecondCounter'
  import Actions from './actions'

  export default {
    data () {
      return {
        title: 'Some text'
      }
    },
    components: {
      appCounter: Counter,
      appActions: Actions
      // appSecondCounter: SecondCounter
    },
    computed: {}

  }
</script>

<style scoped>

</style>
