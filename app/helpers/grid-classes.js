import Ember from 'ember';

export function gridClasses(params/*, hash*/) {
  let width = params[0];
  let height = params[1];
  let classes = 'grid-item';

  if (width > 1)
    classes += ' grid-item--width' + width;

  if (height > 1)
    classes += ' grid-item--height' + height;

  return classes;
}

export default Ember.Helper.helper(gridClasses);
