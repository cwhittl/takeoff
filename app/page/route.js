import { get, set } from '@ember/object';
import Route from '../basic/route';


export default Route.extend({
  model() {
    return this.store.findAll('page');
  },

  actions: {
    removePage(id = null) {
      const flashMessages = get(this, 'flashMessages');

      this.store.findById('page', id)
        .then((page) => {
          page.destroyRecord();
        })
        .then(() => {
          flashMessages.success('Page removed successfully');
        })
        .catch((error) => {
          flashMessages.danger(error);
        });
    },

    addCard(card) {
      const currentPageModel = this.modelFor('page.edit');
      const newCard = this.store.createRecord('card', card);

      set(newCard, 'page', currentPageModel);
      return newCard.save();
    },

    toggleSlotSelection(card) {
      const flashMessages = get(this, 'flashMessages');
      flashMessages.info('Select a slot');
      this.controllerFor('page.edit').toggleProperty('isSelectingSlot');
      this.controllerFor('page.edit').set('selectedCard', card);
    },
  },
});
