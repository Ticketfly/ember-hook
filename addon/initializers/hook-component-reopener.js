import Ember from 'ember';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';
import getAppConfig from 'ember-hook/utils/get-app-config';

const {
  computed,
  Component,
  get
} = Ember;

const config = getAppConfig();
const hookName = get(config, 'emberHook.hookName') || 'hook';

export function initialize() {
  Component.reopen({
    attributeBindings: ['_hookName:data-test'],

    _hookName: computed(hookName, {
      get() {
        const hook = this.get(hookName);
        
        return returnWhenTesting(config, hook);
      }
    }).readOnly()
  });
}

export default {
  name: 'hook-component-reopener',
  initialize: initialize
};
