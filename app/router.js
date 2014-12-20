import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('session', function() {
    this.route('create');
    this.route('login');
    this.route('wait');
  });
  this.resource('experiment');
});

export default Router;
