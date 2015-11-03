import Ember from 'ember';

export function hook(name) {
  return `[data-test="${name}"]`;
}

export function $hook(name) {
  return Ember.$(hook(name));
}
