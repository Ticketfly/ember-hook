import Ember from 'ember';
import decorateHook from 'ember-hook/utils/decorate-hook';
import delimit from 'ember-hook/utils/delimit';

export function hook(name, qualifiers = {}) {
  const hookQuery = `[data-test^="${delimit(name)}"]`;

  return decorateHook(hookQuery, qualifiers, (text) => `[data-test*="${text}"]`);
}

export function $hook(...args) {
  return Ember.$(hook(...args));
}
