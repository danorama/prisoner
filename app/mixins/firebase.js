import Ember from 'ember';

export default Ember.Mixin.create({

  createUser: function(credentials) {
    var fb = this.store.get('firebaseRoot');
    return new Ember.RSVP.Promise(function(resolve, reject) {
      fb.createUser(credentials, function(error, auth) {
        if (error) {
          reject(error);
        } else {
          resolve(auth);
        }
      });
    });
  },


  authenticate: function(credentials) {
    var fb = this.store.get('firebaseRoot');
    return new Ember.RSVP.Promise(function(resolve, reject) {
      fb.authWithPassword(credentials, function(error, auth) {
        if (error) {
          reject(error);
        } else {
          resolve(auth);
        }
      });
    });
  },


  getAuth: function() {
    return this.store.get('firebaseRoot').getAuth();
  },


  newId: function() {
    var fb = this.store.get('firebaseRoot');
    return new Ember.RSVP.Promise(function(resolve,reject) {
      fb.child('experiment/connected_users')
      .transaction(function(last_id) {
        return last_id + 1;
      }, function(error, committed, snapshot) {
        if (error) {
          reject(error);
        } else {
          resolve(snapshot.val());
        }
      });
    });
  }

});
