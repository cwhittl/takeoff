import { Transform } from 'ember-data';
import _$ from 'jquery';

export default Transform.extend({
  deserialize(value) {
    if (!_$.isPlainObject(value)) {
      return {};
    }
    return value;
  },

  serialize(value) {
    if (!$.isPlainObject(value)) {
      return {};
    }
    return value;
  },
});
