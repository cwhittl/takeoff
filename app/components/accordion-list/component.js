import Component from '@ember/component';

export default Component.extend({
  tagName: 'ul',

  actions: {
    toggleVisibility(index) {
      this.sendAction('toggleVisibility', index);
    },
  },
});
