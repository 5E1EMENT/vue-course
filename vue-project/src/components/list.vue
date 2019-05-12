<template>
  <div>
    <h1>List</h1>
    <input type="text" v-model="searchName">
    <ul>
      <li v-for="(name,index) in filteredNames " :key="index">{{name}}</li>
    </ul>
  </div>
</template>

<script>
  import ListMixin from './../mixins/listMixin'
  export default {
    name: "list",
    mixins: [ListMixin]
  }
</script>

<style scoped>

</style>
