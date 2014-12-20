import {Model, hasMany} from 'fireplace';

export default Model.extend({
  users: hasMany({ embedded: false })
});
