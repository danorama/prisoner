import {Model, attr} from 'fireplace';

export default Model.extend({
  block:  attr('number', { default: 1 }),
  period: attr('number', { default: 2 }),
  stage:  attr('number', { default: 3 }),

  expected_users:  attr('number'),
  connected_users: attr('number', { default: 0 })
});
