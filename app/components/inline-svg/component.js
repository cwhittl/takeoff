import Component from '@ember/component';
import { get, computed } from '@ember/object';

import { htmlSafe } from '@ember/string';

export default Component.extend({
  tagName: 'svg',
  attributeBindings: ['viewBox', 'width', 'height'],

  href: computed('src', 'anchor', {
    get() {
      const src = get(this, 'src');
      const anchor = get(this, 'anchor');
      const escapedHref = `${src}#${anchor}`;

      return htmlSafe(escapedHref);
    },
  }),
});
