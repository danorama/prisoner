import Ember from 'ember';

export default Ember.Controller.extend({
  needs: ['session'],
  user:  {},

  actions: {
    newParticipant: function() {
      var credentials = this.get('user');
      this.get('controllers.session').send('create', credentials);
    }
  }
});
