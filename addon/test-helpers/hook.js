import Ember from 'ember';
import decorateHook from 'ember-hook/utils/decorate-hook';

export function hook(name, qualifiers = {}) {
  const hook = `[data-test^="${name}"]`;

  return decorateHook(hook, qualifiers, (text) => `[data-test*="${text}"]`);
}

export function $hook(...args) {
  return Ember.$(hook(...args));
}
