import Ember    from 'ember';
import Firebase from 'prisoner/mixins/firebase';

export default Ember.ObjectController.extend(Firebase, {

  // Properties
  exists: function() {
    return !!this.getAuth();
  }.property(),

  signedIn: Ember.computed.alias('exists'),


  // Actions
  actions: {

    reauthenticate: function(credentials) {
      var _this = this;
      this.authenticate(credentials)
      .then(function(auth) {
        return _this.store.fetch('user');
      })
      .then(function(users) {
        return users.findBy('email', credentials.email);
      })
      .then(function(user) {
        console.log(user);
        _this.set('model', user);
        _this.transitionToRoute('session.wait');
      });
    },

    login: function() {
      var _this = this;
      var auth = this.getAuth();
      this.store.fetch('user')
      .then(function(users) {
        return users.findBy('email', auth.password.email);
      })
      .then(function(user) {
        _this.set('model', user);
      });
    },

    create: function(credentials) {
      var _this = this;
      this.createUser(credentials)
      .then(function(error) {
        if (!error) {
          return _this.authenticate(credentials);
        }
      })
      .then(function() {
        return _this.newId();
      })
      .then(function(uid) {
        var user = _this.store.createRecord('user', {
          id:    uid,
          email: credentials.email,
          name:  credentials.name
        });
        return user.save();
      })
      .then(function(user) {
        _this.set('model', user);
        _this.transitionToRoute('session.wait');
      });

    }


  }

});
