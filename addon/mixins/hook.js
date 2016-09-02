import Ember from 'ember';
import config from 'ember-get-config';
import delimit from 'ember-hook/utils/delimit';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';

const {
  Mixin,
  computed,
  get
} = Ember;

const hookName = get(config, 'emberHook.hookName') || 'hook';

export default Mixin.create({
  init() {
    this._super(...arguments);

    if (this.tagName || this.renderer._destinedForDOM) {
      this.attributeBindings.push('_hookName:data-test');
    }
  },

  _hookName: computed(hookName, {
    get() {
      const hook = get(this, hookName);

      return returnWhenTesting(config, delimit(hook));
    }
  }).readOnly()
});
