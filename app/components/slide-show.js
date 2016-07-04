import Ember from 'ember';

export default Ember.Component.extend({
  index: 0,
  pauseInterval: 3000,
  pixelDist: 15,
  transitionUpdate: null,
  update: null,
  images: null,


  didInsertElement() {
    this.images = $('.slide');


    $.each(this.images, function(index, element) {
        if (index === 0) {
          $(element).addClass('slide-on');
        }
        else {
          $(element).addClass('slide-waiting');
        }
      }
    );

    let that = this;

    this.transitionUpdate = setInterval(function() { that.step(); }, this.pauseInterval);
  },

  step(){
    var rightIndex = (this.index + 1) % this.images.length;
    var waitIndex = (this.index + 2) % this.images.length;

    var left = this.images[this.index];
    var right = this.images[rightIndex];
    var wait = this.images[waitIndex];

    $(left).attr('class', 'slide slide-off');
    $(right).attr('class', 'slide slide-on');
    $(wait).attr('class', 'slide slide-waiting');


    this.index = (this.index + 1) % this.images.length;
  },

});
