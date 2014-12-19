import {Model, attr} from 'fireplace';

export default Model.extend({
  email: attr('string'),
  name:  attr('string'),
  
  points: attr('number')
});
