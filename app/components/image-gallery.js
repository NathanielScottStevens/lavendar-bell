/* global masonry, imagesLoaded */
import Ember from 'ember';

export default Ember.Component.extend({

  didInsertElement() {
    this._super(...arguments);

    Ember.run.later(() => {
      var grid = $('.grid').imagesLoaded(function() {
        grid.masonry({
          columnWidth: 128,
          itemSelector: '.grid-item',
          percentPosition: false,
          //fitWidth: true,
          //gutter: 10,
        });
      });

      grid.on('layoutComplete', this.fadeOutCover);
    }, 1000);

  },

  fadeOutCover(){
    $('.cover-screen').addClass('fade-out');
  }
});
