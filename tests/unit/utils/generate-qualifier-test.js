import generateQualifier from 'ember-hook/utils/generate-qualifier';
import { module, test } from 'qunit';

module('Unit | Utility | generate qualifier');

test('it returns the correct qualifier', function(assert) {
  assert.expect(1);

  const object = { foo: 'bar', baz: 'boozle' };
  const result = generateQualifier(object, 'foo');

  assert.equal(result, '&^%^&foo=bar', 'generates the correct qualifier');
});
