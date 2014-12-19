import ENV from 'prisoner/config/environment';
import {Store} from 'fireplace';

export default Store.extend({
  firebaseRoot: new window.Firebase('https://' + ENV.SESSION_ID + '.firebaseio.com')
});