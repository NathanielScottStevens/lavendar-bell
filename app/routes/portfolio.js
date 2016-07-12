import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    let photos = this.get('store').findAll('image');
    return { "photos": photos };
  }
});
