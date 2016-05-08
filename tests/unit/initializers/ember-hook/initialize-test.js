import Ember from 'ember';
import { initialize } from 'ember-hook';
import { module, test } from 'qunit';

var registry, application;

module('Unit | Initializer | ember hook/initialize', {
  beforeEach: function() {
    Ember.run(function() {
      application = Ember.Application.create();
      registry = application.registry;
      application.deferReadiness();
    });
  }
});

test('applies the `HookMixin` to `Component`', function(assert) {
  assert.expect(2);

  initialize();

  const { Component } = Ember;
  const component = Component.create({ hook: 'foo' });

  assert.deepEqual(component.get('attributeBindings'), ['ariaRole:role', '_hookName:data-test'], 'adds _hookName to the attributeBindings');
  assert.equal(component.get('_hookName'), 'foo', 'adds the _hookName computed');
});
