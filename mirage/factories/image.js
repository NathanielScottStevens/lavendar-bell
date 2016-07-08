import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({
  src() { return faker.image.people(1024, 1024, true); }
});
