import Component from '@ember/component';
import { get, computed } from '@ember/object';

export default Component.extend({
  tagName: 'span',

  iconClass: computed('iconName', {
    get() {
      const iconName = get(this, 'iconName');

      return `icon icon-${iconName}`;
    },
  }),

  iconPath: computed('iconName', {
    get() {
      const iconName = get(this, 'iconName');

      return `assets/images/icon-${iconName}.svg`;
    },
  }),
});
