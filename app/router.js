import Ember from 'ember';
import config from './config/environment';

const Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.route('about');
  this.route('portfolio');
  this.route('video');
  this.route('info-pricing');
  this.route('contact');
  this.route('blog');
});

export default Router;
