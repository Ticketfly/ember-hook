import Ember from 'ember';
import config from 'ember-get-config';
import decorateHook from 'ember-hook/utils/decorate-hook';
import delimit from 'ember-hook/utils/delimit';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';

const {
  Mixin,
  computed,
  get
} = Ember;

const hookName = get(config, 'emberHook.hookName') || 'hook';
const hookQualifierName = get(config, 'emberHook.hookQualifierName') || 'hookQualifiers';

export default Mixin.create({
  init() {
    if (get(this, 'tagName')) {
      this.attributeBindings.push('_hookName:data-test');
    }

    this._super(...arguments);
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
