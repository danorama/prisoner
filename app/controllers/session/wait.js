import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['session'],

  name: Ember.computed.alias('controllers.session.name')
});
