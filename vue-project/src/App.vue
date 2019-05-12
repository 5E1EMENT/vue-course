<template>
    <div class="container pt-2">
        <h1>{{text}}</h1>
        <input type="text" v-model="searchName">
        <ul>
            <li v-for="(name,index) in filteredNames " :key="index">{{name}}</li>
        </ul>
    </div>
</template>

<script>

export default {
  data() {
    return {
      text: 'Some Text',
      color: 'red',
      searchName:'',
      names: ['vlad', 'max', 'tanya', 'danik', 'polya']
    }
  },
  components: {},
  computed: {
    filteredNames () {
      return this.names.filter(name=> {
        return name.indexOf(this.searchName) !== -1
      })
    }

  },
  filters: {
    lowercase(value) {
      return value.toLowerCase()
    }
  }


}
</script>

<style scoped>

</style>
