import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  //this.route('')
  this.route('session');
  this.route('session/login');
  this.route('session/create');
});

export default Router;
