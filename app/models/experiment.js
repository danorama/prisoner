import {Model, attr} from 'fireplace';

export default Model.extend({
  block:  attr('number'),
  period: attr('number'),
  stage:  attr('number'),
  
  expected_users:  attr('number'),
  connected_users: attr('number', { default: 0 })
});
