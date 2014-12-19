import Ember    from 'ember';
import Firebase from 'tgm/mixins/firebase';

export default Ember.ObjectController.extend(Firebase, {
  
  // Properties
  exists: function() {
    return !!this.getAuth();
  }.property(),
  
  signedIn: Ember.computed.alias('exists'),
  
  
  // Actions
  actions: {
    login: function() {
      var auth = this.getAuth();
      var user = this.store.find('user', auth.uid);
      this.set('model', user);
    },
  
    signUp: function(credentials) {
      var _this = this;
      this.createUser(credentials)
      .then(this.authenticate(credentials))
      .then(function(auth) {
        var user = _this.store.createRecord('user', {
          id:    auth.uid,
          email: credentials.email,
          name:  credentials.name
        });
        return user.save();
      })
      .then(function(user) {
        _this.set('model', user);
      });
    },
  }
  
});
