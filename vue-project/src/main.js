import Vue from 'vue' //Подключение библиотеки из node modules
import App from './App.vue'
import AppList from './components/list'

Vue.component('app-list', AppList)
Vue.filter('uppercase', (value) => {
    return value.toUpperCase()
})

// Глобальная регистрация
Vue.mixin({
  beforeCreate() {
      console.log('beforeCreate')
  }
})

new Vue({
    el: '#app',
    render: h => h(App)

})

