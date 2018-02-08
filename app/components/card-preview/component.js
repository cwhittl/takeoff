import Component from '@ember/component';
import { get, computed } from '@ember/object';
import { htmlSafe } from '@ember/string';

export default Component.extend({
  classNames: ['previewCard'],
  attributeBindings: ['style'],

  style: computed('card.imageUrl', {
    get() {
      const imageUrl = get(this, 'card.imageUrl');
      const safeImageUrl = htmlSafe(`background: url('${imageUrl}')`);

      return safeImageUrl;
    },
  }),

  actions: {
    remove(id) {
      this.sendAction('remove', id);
    },
  },
});
