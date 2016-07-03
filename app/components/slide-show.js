import Ember from 'ember';

export default Ember.Component.extend({
  index: 0,
  transitionInterval: 16,
  pauseInterval: 3000,
  pixelDist: 15,
  transitionUpdate: null,
  update: null,
  images: null,


  didInsertElement() {
    this.images = $('.slide');

    $.each(this.images, function(index, element) {
      if (index !== 0) {
        $(element).css('left', '980px');
      }
    });

    let that = this;
    this.transitionUpdate = setInterval(function() { that.beginTransition(); }, this.pauseInterval);
  },

  beginTransition: function(){
    let that = this;
    let leftImg = this.images[this.index];
    let rightImg;

    if (this.index === this.images.length - 1){
      rightImg = this.images[0];
    }
    else {
      rightImg = this.images[this.index + 1];
    }

    $.each(this.images, function(index, element) {
        if (element !== leftImg && element !== rightImg) {
          $(element).css('display', 'none');
        }
        else {
          $(element).css('display', 'block');
        }
    });

    $(rightImg).css('left', '980px');

    this.update = setInterval(function() { that.updateSlides(leftImg, rightImg); }, this.transitionInterval);
  },

  updateSlides: function(left, right){
    this.moveImage(left);
    this.moveImage(right);

    if ($(left).position().left < -980){
      clearInterval(this.update);
      this.index = (this.index + 1) % this.images.length;
      $(left).css('left', '-980px');
    }
  },

  moveImage: function(image){
    let position = $(image).position();
    $(image).css('left', (position.left - this.pixelDist).toString() + 'px');
  },

});
