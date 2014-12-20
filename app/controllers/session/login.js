import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['session'],
  user:  {},

  actions: {
    reauthenticate: function() {
      var credentials = this.get('user');
      this.get('controllers.session').send('reauthenticate', credentials);
    }
  }
});
