import decorateHook from 'ember-hook/utils/decorate-hook';
import delimiter from 'ember-hook/utils/delimiter';
import { module, test } from 'qunit';

module('Unit | Utility | decorate hook');

test('it decorates the hook with qualifiers', function(assert) {
  assert.expect(1);

  const result = decorateHook('foo', { bar: 'baz', aff: 'arf', zap: 'zork' });

  assert.equal(result, `fooaff=arf${delimiter}bar=baz${delimiter}zap=zork${delimiter}`, 'decorates with sorted key value pairs');
});

test('it wraps the content if a callback is provided', function(assert) {
  assert.expect(1);

  const result = decorateHook('foo', { bar: 'baz', aff: 'arf', zap: 'zork' }, (text) => `<${text}>`);

  assert.equal(result, `foo<aff=arf${delimiter}><bar=baz${delimiter}><zap=zork${delimiter}>`, 'wrapped correctly');
});
