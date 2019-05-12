<template>
    <div class="container pt-2">
        <h1 v-colored:background.font="'red'">{{text}}</h1>
        <h1 v-colored:color.delay="'blue'">{{text}}</h1>
        <button >Жми</button>
        <input type="text" v-model="color">
        {{color}}
    </div>
</template>

<script>

export default {
    data() {
      return {
        text: 'SOME TEXT',
        color: 'red'
      }
    },
    components: {
    },
    computed: {
    }

}
</script>

<style scoped>

</style>
