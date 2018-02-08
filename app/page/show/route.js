import { get, set } from '@ember/object';
import Route from '../../basic/route';

export default Route.extend({
  breadCrumb: null,

  afterModel(model) {
    const title = `Viewing: ${get(model, 'title')}`;

    set(this, 'breadCrumb', {
      title,
      iconName: 'url-black',
    });
  },
});
