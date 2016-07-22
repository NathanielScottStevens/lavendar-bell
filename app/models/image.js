import Model from 'ember-data/model';
import attr from 'ember-data/attr';
// import { belongsTo, hasMany } from 'ember-data/relationships';

export default Model.extend({
  src: attr('string'),
  gridWidth: attr('number'),
  gridHeight: attr('number')
});
