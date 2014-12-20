import {Model, attr} from 'fireplace';

export default Model.extend({
  name:        attr('string'),
  if:          attr({ default: false }),
  otherwise:   attr({ default: false }),
  you_delta:   attr('number', { default: 0 }),
  other_delta: attr('number', { default: 0 })
});
