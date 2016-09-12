import Ember from 'ember';
import { initialize } from 'ember-hook';
import { module, test } from 'qunit';
import delimiter from 'ember-hook/utils/delimiter';

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

  const component = Ember.Component.proto();

  component.setProperties({ hook: 'foo', hookQualifiers: { index: 3 } });

  assert.ok(component.get('attributeBindings').indexOf('_hookName:data-test') > -1, 'adds _hookName to the attributeBindings');
  assert.equal(component.get('_hookName'), `foo${delimiter}index=3${delimiter}`, 'adds the _hookName computed');
});
