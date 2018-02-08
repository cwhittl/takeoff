import Component from '@ember/component';
import { set, get, computed } from '@ember/object';

export default Component.extend({
  classNames: ['templateEdit'],
  classNameBindings: ['isSelectingSlot:is-selecting-slot'],

  layoutName: computed('templateId', {
    get() {
      const templateId = get(this, 'templateId');

      return `page-template-${templateId}`;
    },
  }),

  mapSlots: computed('page.cards', function() {
    const cards = get(this, 'page.cards');

    cards.forEach((card) => {
      const position = get(card, 'position');
      const slotPosition = `slot${position}`;
      set(this, slotPosition, card);
    });
  }),

  actions: {
    sendPosition(position) {
      this.sendAction('sendPosition', position);
    },

    editCard(card) {
      this.sendAction('editCard', card);
    },
  },
});
