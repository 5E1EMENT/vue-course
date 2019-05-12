export default  {
  data() {
    return {
      searchName:'',
      names: ['vlad', 'max', 'tanya', 'danik', 'polya']
    }
  },
  computed: {
    filteredNames () {
      return this.names.filter(name => {
        return name.toLowerCase().indexOf(this.searchName.toLowerCase()) !== -1
      })
    }
  }
}
