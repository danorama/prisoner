import Ember from 'ember';

export default Ember.ObjectController.extend({
  needs: ['session'],
  user: Ember.computed.alias('controllers.session.model'),

  history: Ember.computed.alias('controllers.session.history')

});
