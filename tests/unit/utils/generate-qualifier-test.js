import generateQualifier from 'ember-hook/utils/generate-qualifier';
import delimiter from 'ember-hook/utils/delimiter';
import { module, test } from 'qunit';

module('Unit | Utility | generate qualifier');

test('it returns the correct qualifier', function(assert) {
  assert.expect(1);

  const object = { foo: 'bar', baz: 'boozle' };
  const result = generateQualifier(object, 'foo');

  assert.equal(result, `foo=bar${delimiter}`, 'generates the correct qualifier');
});
