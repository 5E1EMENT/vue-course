<template>
  <div class="container pt-2">
    <div class="textarea">
      <h1>{{name}}</h1>
      <textarea type="text" v-model="name">{{name}}</textarea>
    </div>
    <hr>
    <div class="checkbox">
      <label>
        <input type="checkbox" value="instagram" v-model="social">
      </label>
      <label>
        <input type="checkbox" value="vk" v-model="social">
      </label>
      <label>
        <input type="checkbox" value="facebook" v-model="social">
      </label>
      <ul>
        <li v-for="s in social">{{s}}</li>
      </ul>
    </div>
    <hr>
    <div class="radio">
      <label>
        <input type="radio" value="instagram" v-model="socialRadio">
      </label>
      <label>
        <input type="radio" value="vk" v-model="socialRadio">
      </label>
      <label>
        <input type="radio" value="facebook" v-model="socialRadio">
      </label>
      <h2>{{socialRadio}}</h2>
    </div>
    <hr>
    <div class="select">
      <select v-model="defaultSocial">
        <option
          v-for="s in socialList"
          >{{ s }}</option>
      </select>
      {{defaultSocial}}
    </div>
    <hr>
    <div class="counter-watch">
      <input type="text" v-model.number="age">
      <p>{{age}}</p>
    </div>
    <hr>
    <div class="default-control">
      <app-onoff v-model="switched"></app-onoff>'
      <div class="">
        <h3 v-if="switched">Component is enabled</h3>
        <h3 v-else>Component is disabled</h3>
      </div>
    </div>
  </div>
</template>

<script>
  import Onoff from './Onoff'
  export default {
    data() {
      return {
        text: 'Some Text',
        name: '',
        social: [],
        socialRadio:'',
        socialList: ['instagram','vk','facebook'],
        defaultSocial: 'vk',
        age: 20,
        switched: false
      }
    },
    watch: {
      age (value) {
        console.log(value)
      }
    },
    components: {
      appOnoff: Onoff
    },

  }
</script>

<style scoped>

</style>
