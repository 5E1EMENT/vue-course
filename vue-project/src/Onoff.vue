<template>
<div>
  <button
    class="btn  on"
    :class="{'btn-success': value}"
    @click="onChange(true)"
  >On</button>
  <button
    class="btn  off"
    :class="{'btn-danger': !value}"
    @click="onChange(false)"
  >Off</button>
</div>
</template>

<script>
  export default {
    name: "Onoff",
    props: ['value'],
    methods: {
      onChange (newValue) {
        this.$emit('input', newValue)
      }
    }
  }
</script>

<style scoped>

</style>
