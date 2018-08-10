import Ember from 'ember';
import config from 'ember-get-config';
import decorateHook from 'ember-hook/utils/decorate-hook';
import delimit from 'ember-hook/utils/delimit';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';

const {
  Mixin,
  computed,
  get,
  set
} = Ember;

const hookName = get(config, 'emberHook.hookName') || 'hook';
const hookQualifierName = get(config, 'emberHook.hookQualifierName') || 'hookQualifiers';

export default Mixin.create({
  init() {
    this._super(...arguments);
    if (this.tagName) {
      let newAttributeBindings = [];
      let bindings = get(this, 'attributeBindings');
  
      if (Array.isArray(bindings)) {
        newAttributeBindings = newAttributeBindings.concat(bindings);
      }

      newAttributeBindings.push('_hookName:data-test');
      set(this, 'attributeBindings', newAttributeBindings);
    }
  },

  _hookName: computed(hookName, hookQualifierName, {
    get() {
      const hook = get(this, hookName);
      const qualifiers = get(this, hookQualifierName);

      if (hook) {
        return returnWhenTesting(config, decorateHook(delimit(hook), qualifiers));
      }
    }
  }).readOnly()
});
