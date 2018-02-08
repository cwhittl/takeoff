import { Model, belongsTo } from 'ember-data';

export default Model.extend({
  page: belongsTo('page', { polymorphic: true }),
});
