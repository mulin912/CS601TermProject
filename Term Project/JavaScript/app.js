
new Vue({
  el: '#app',
  data: {
    currentImage: {
      src: 'images/Hawaii_Image.png',
      alt: 'Hawaii Image'
    },
    earlierImage: {
      src: 'images/Vegas.jpeg',
      alt: 'Vegas Image'
    }
  },
  methods: {
    showEarlierImage() {
      this.currentImage = this.earlierImage;
    },
    showCurrentImage() {
      this.currentImage = {
        src: 'images/Hawaii_Image.png',
        alt: 'Hawaii Image'
      };
    }
  }
});
