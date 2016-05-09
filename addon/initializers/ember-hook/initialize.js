import Ember from 'ember';
import HookMixin from '../../mixins/hook';

const { Component } = Ember;

export function initialize() {
  Component.reopen(HookMixin);
}

export default {
  name: 'ember-hook/initialize',
  initialize: initialize
};
