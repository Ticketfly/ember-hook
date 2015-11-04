import Ember from 'ember';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';

const { Helper } = Ember;

export default Helper.extend({
  compute(params) {
    const [hookName, forceHook] = params;
    const config = this.container.lookupFactory('config:environment');

    return returnWhenTesting(config, hookName, forceHook);
  }
});
