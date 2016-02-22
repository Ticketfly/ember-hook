import Ember from 'ember';
import config from 'ember-get-config';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';

const {
  Mixin,
  computed,
  get
} = Ember;

const hookName = get(config, 'emberHook.hookName') || 'hook';

export default Mixin.create({
  attributeBindings: ['_hookName:data-test'],

  _hookName: computed(hookName, {
    get() {
      const hook = get(this, hookName);

      return returnWhenTesting(config, hook);
    }
  }).readOnly()
});
