import { gridClasses } from 'lavender-bell/helpers/grid-classes';
import { module, test } from 'qunit';

module('Unit | Helper | grid classes');

test('adds "grid-item"', function(assert) {
  let result = gridClasses([]);
  assert.strictEqual(result, 'grid-item', "'grid-item' should always be added.");
});

test('should add grid width if higher than 1', function(assert) {
  let result = gridClasses([2, 1])
  assert.strictEqual(result, 'grid-item grid-item--width2');
});

test('should add grid height if higher than 1', function(assert) {
  let result = gridClasses([1, 2])
  assert.strictEqual(result, 'grid-item grid-item--height2');
});
