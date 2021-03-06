import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var session = this.controllerFor('session');
    if (session.get('exists')) {
      this.transitionTo('session.wait');
    } else {
      this.transitionTo('session.create');
    }
  }
});
