import Ember from 'ember';
import { computed, get } from '@ember/object';

const {
  Component,
} = Ember;

export default Component.extend({
  tarball: computed('pageId', {
    get() {
      const pageId = get(this, 'pageId');

      return `${pageId}.tar.gz`;
    },
  }),

  tarballUrl: computed('pageId', {
    get() {
      const pageId = get(this, 'pageId');

      return `/tarball/${pageId}.tar.gz`;
    },
  }),
});
