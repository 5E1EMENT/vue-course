import Vue from 'vue' //Подключение библиотеки из node modules
import App from './App.vue'
import ColorDirective from './directives/color'

Vue.directive('colored', ColorDirective)
new Vue({
    el: '#app',
    render: h => h(App)

})

