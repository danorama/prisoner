export function initialize(container, application) {
  var session = container.lookup('controller:session');

  //application.deferReadiness();
  //console.log(session)
  if (session.get('exists')) {
    session.send('login');
  }
  //application.advanceReadiness();
}

export default {
  name:  'session',
  after: 'store',
  initialize: initialize
};
