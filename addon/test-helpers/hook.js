import Ember from 'ember';
import decorateHook from 'ember-hook/utils/decorate-hook';

export function hook(name, qualifiers = {}) {
  const hookQuery = `[data-test^="${name}"]`;

  return decorateHook(hookQuery, qualifiers, (text) => `[data-test*="${text}"]`);
}

export function $hook(...args) {
  return Ember.$(hook(...args));
}
