import Ember from 'ember';

export default Ember.Component.extend({
  // TODO: Evaluate if this appoach is better:
  // http://www.thesoftwaresimpleton.com/blog/2015/06/10/cps-promise/
  groupSize: 4,
  groupedImages: Ember.computed('images.[]', function() {

    var items = this.get('images.[]');
    var grouped = Ember.A();
    var groupSize = this.get('groupSize');
    var self = this;

    return items.then(function(){
      items.forEach(function(item, index) {
        if (index % groupSize === 0) grouped.pushObject([]);
          grouped.get('lastObject').pushObject(item);
        })
        self.set('groupedImages', grouped);
      },
      function() {
        console.log("Failed!!");
    });
  })
});
