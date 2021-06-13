var app = new Vue({
  el: '#app',
  data: {
    message: 'Footer Link'
  },
  methods: {
    say: function(text) {
      return "Hello" + text;
    }
  }
})

var cardInfo = new Vue({
  el: '#cardInfo',
  data: {
    card_title: 'CANVA BASED TEMPLATES',
    card_text: 'All of the Templates are designed in Canva, which is a free, popular and easy to use online design software that is perfect for Social Media graphics.',
    card_icon_src: 'images/img-sec-logo-1.png'
  }
})
