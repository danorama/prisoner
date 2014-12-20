import Ember from 'ember';

export default Ember.Route.extend({
  beforeModel: function() {
    var session = this.controllerFor('session');
    if (!session.get('exists')) {
      this.transitionTo('session');
    }
  },

  model: function() {
    return this.store.find('experiment', 1);
  }
});
