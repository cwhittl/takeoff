import Ember from 'ember';
import { get, set } from '@ember/object';
import UUID from 'UUID';

import Route from '../../basic/route';

const {
  inject,
} = Ember;

export default Route.extend({
  sidebarManager: inject.service(),
  breadCrumb: {
    title: 'Home',
    iconName: 'avatar',
  },
  beforeModel() {
    const sidebarManager = get(this, 'sidebarManager');
    set(sidebarManager, 'currentSideBar', 'instructions-side-bar');
  },
  actions: {
    toggleModal() {
      this.controller.toggleProperty('isShowingModal');
    },

    closeModal() {
      this.controller.set('isShowingModal', false);
    },

    createPage(templateId) {
      const flashMessages = get(this, 'flashMessages');
      const page = this.store.createRecord('page', {
        templateId,
        id: UUID.generate(),
        title: 'Untitled page',
        imageUrl: `/assets/images/template-${templateId}.svg`,
      });

      page.save().then(() => {
        flashMessages.success('Created new page');
      }).catch(() => {
        flashMessages.danger('Something went wrong!');
      }).finally(() => {
        this.send('closeModal');
      });
    },
  },
});
