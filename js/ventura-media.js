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

var venSection = new Vue({
  el: '#venSection',
  data: {
    counter: 0,
    clientX: 0,
    clientY: 0
  },
  methods: {
    handleClick: function(number) {
      this.counter += number;
    },
    handleMousemove: function(e) {
      this.clientX = e.clientX;
      this.clientY = e.clientY;
    }
  }
})
