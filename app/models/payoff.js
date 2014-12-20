import {Model, attr} from 'fireplace';

export default Model.extend({
  you:   attr('string'),
  other: attr('string'),
  value: attr('number', { default: 0 })
});
