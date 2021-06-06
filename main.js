var vueInstance = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    title: 'Huyseen lanh'
  },
  methods: {
    say: function(text) {
      return 'Hello' + text;
    }
  }
})

console.log(vueInstance);

setTimeout(() => {
  vueInstance.title = 'Ngoc Anh';
}, 3000);
