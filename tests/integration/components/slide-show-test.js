import { moduleForComponent, test } from 'ember-qunit';
import hbs from 'htmlbars-inline-precompile';

moduleForComponent('slide-show', 'Integration | Component | slide show', {
  integration: true
});

test('should create multiple img tags from photos', function(assert) {
  // Set any properties with this.set('myProperty', 'value');
  // Handle any actions with this.on('myAction', function(val) { ... });

  let stubPhotos = Ember.Object.create({
    data: [
      {src: 'src-1.png'},
      {src: 'src-2.png'},
      {src: 'src-3.png'},
    ]
  });
  this.set('photos', stubPhotos);
  this.render(hbs`{{slide-show}}`);

  assert.equal(this.$('img').length, 3);
});
