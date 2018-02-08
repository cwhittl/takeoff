import Route from '@ember/routing/route';
import { get } from '@ember/object';
import _$ from 'jquery';

export default Route.extend({
  activate() {
    const routeName = get(this, 'routeName');
    const routeNameBEM = routeName.replace('.', '__');
    _$('body').attr('id', routeNameBEM);
  },

  deactivate() {
    _$('body').attr('id', null);
  },
});
