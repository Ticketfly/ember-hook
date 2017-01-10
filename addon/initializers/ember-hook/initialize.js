import Ember from 'ember';
import config from 'ember-get-config';
import HookMixin from '../../mixins/hook';

const { Component, get } = Ember;

export function initialize() {
  // Only disable reopening all components if the config
  // setting of reopen is set to false else by default it
  // will reopen
  if (get(config, 'emberHook.reopen') !== false) {
    Component.reopen(HookMixin);
  }
}

export default {
  name: 'ember-hook/initialize',
  initialize: initialize
};
