import Ember from 'ember';

const { Helper } = Ember;

export default Helper.extend({
  compute(params) {
    const config = this.container.lookupFactory('config:environment');

    if (config.environment === 'test') {
      return params[0];
    }
  }
});
