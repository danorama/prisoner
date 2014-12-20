import {Model, attr} from 'fireplace';

export default Model.extend({
  period:   attr('number'),
  stage:    attr('number'),
  you:      attr('string'),
  other:    attr('string'),
  outcome:  attr('string'),
  earnings: attr('number'),
  group:    attr('string')
});
