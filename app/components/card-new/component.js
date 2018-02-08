import Component from '@ember/component';

export default Component.extend({
  classNames: ['newCard'],

  click() {
    this.sendAction('create');
  },
});
