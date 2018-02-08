import Ember from 'ember';
import { computed, getWithDefault } from '@ember/object';

const {
  Component,
} = Ember;

export default Component.extend({
  routeHierarchy: computed('currentRouteName', {
    get() {
      const container = Ember.getOwner(this);
      const currentRouteName = getWithDefault(this, 'currentRouteName', '');

      if (currentRouteName === '') {
        return;
      }

      const routeNames = currentRouteName.split('.');

      const filteredRouteNames = routeNames.filter((name) => {
        return name !== 'index';
      });

      return filteredRouteNames.map((name, index) => {
        let path;
        const routes = routeNames.slice(0, index + 1);

        if (routes.length === 1) {
          path = `${name}.index`;
        } else {
          path = routes.join('.');
        }

        const routeObject = container.lookup(`route:${path}`);
        const breadCrumb = getWithDefault(routeObject, 'breadCrumb', {});
        const title = getWithDefault(breadCrumb, 'title', name);
        const iconName = getWithDefault(breadCrumb, 'iconName', null);

        return { path, title, iconName };
      });
    },
  }),
});
