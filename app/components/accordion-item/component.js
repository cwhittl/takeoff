import Component from '@ember/component';
import { get } from '@ember/object';

export default Component.extend({
  tagName: 'li',
  classNames: ['sideBar__cardItem'],

  actions: {
    itemClick() {
      const item = get(this, 'item');
      this.sendAction('handleClick', item);
    },
  },
  click() {
    this.send('itemClick');
  },
});
