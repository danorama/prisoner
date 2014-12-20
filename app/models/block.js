import {Model, attr, hasMany} from 'fireplace';

export default Model.extend({
  number            : attr('number'),
  min_periods       : attr('number', { default: 10 }),
  random_threshold  : attr('number', { default: 75 }),
  endowment         : attr('number', { default: 0  }),

  group_arrangement : attr('string', { default: 'random' }),
  group_size        : attr('number', { default: 4 }),
  groups            : hasMany({ embedded: true })
});
