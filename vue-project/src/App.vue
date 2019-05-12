<template>
    <div class="container pt-2">
        <h1>{{text}}</h1>
        <input type="text" v-model="searchName">
        <ul>
            <li v-for="(name,index) in filteredNames " :key="index">{{name}}</li>
        </ul>
        <app-list></app-list>
    </div>
</template>

<script>
  import ListMixin from './mixins/listMixin'
export default {
  data() {
    return {
      text: 'Some Text',
      color: 'red',
    }
  },
  mixins: [ListMixin],
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }


}
</script>

<style scoped>

</style>
