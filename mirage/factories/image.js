import { Factory, faker } from 'ember-cli-mirage';

export default Factory.extend({


  src(index) {
    index = index % 4;
    switch (index){
      case 0:
        return faker.image.people(128, 128, true);
        break;
      case 1:
        return faker.image.people(128, 256, true);
        break;
      case 2:
        return faker.image.people(512, 256, true);
        break;
      case 3:
        return faker.image.people(256, 512, true);
        break;
    }
  },

  gridWidth(index) {
    index = index % 4;
    switch (index){
      case 0:
        return 1;
        break;
      case 1:
        return 1;
        break;
      case 2:
        return 3;
        break;
      case 3:
        return 2;
        break;
    }
  },

  gridHeight(index) {
    index = index % 4;
    switch (index){
      case 0:
        return 1;
        break;
      case 1:
        return 2;
        break;
      case 2:
        return 2;
        break;
      case 3:
        return 3;
        break;
    }
  },


});
