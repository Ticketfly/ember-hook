import decorateHook from 'ember-hook/utils/decorate-hook';
import { module, test } from 'qunit';

module('Unit | Utility | decorate hook');

test('it decorates the hook with qualifiers', function(assert) {
  assert.expect(1);

  const result = decorateHook('foo', { bar: 'baz', aff: 'arf', zap: 'zork' });

  assert.equal(result, 'foo&^%^&aff=arf&^%^&bar=baz&^%^&zap=zork', 'decorates with sorted key value pairs');
});

test('it wraps the content if a callback is provided', function(assert) {
  assert.expect(1);

  const result = decorateHook('foo', { bar: 'baz', aff: 'arf', zap: 'zork' }, (text) => `<${text}>`);

  assert.equal(result, 'foo<&^%^&aff=arf><&^%^&bar=baz><&^%^&zap=zork>', 'wrapped correctly');
});
