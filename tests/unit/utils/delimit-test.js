import delimit from 'ember-hook/utils/delimit';
import delimiter from 'ember-hook/utils/delimiter';
import { module, test } from 'qunit';

module('Unit | Utility | delimit');

test('it appends the delimiter to a string', function(assert) {
  assert.expect(1);

  const result = delimit('foo');

  assert.equal(result, `foo${delimiter}`, 'generates the correct string');
});
