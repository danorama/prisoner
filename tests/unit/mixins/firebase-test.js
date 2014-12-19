import Ember from 'ember';
import FirebaseMixin from 'prisoner/mixins/firebase';

module('FirebaseMixin');

// Replace this with your real tests.
test('it works', function() {
  var FirebaseObject = Ember.Object.extend(FirebaseMixin);
  var subject = FirebaseObject.create();
  ok(subject);
});
