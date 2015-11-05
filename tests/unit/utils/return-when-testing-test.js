import returnWhenTesting from 'ember-hook/utils/return-when-testing';
import { module, test } from 'qunit';

module('Unit | Utility | test environment');

test('it returns the second argument if the first has a test environment', function(assert) {
  const result = returnWhenTesting({ environment: 'test' }, 'foo');
  assert.equal(result, 'foo');
});

test('it returns nothing if the first argument does not contain test environment', function(assert) {
  const result = returnWhenTesting({ environment: 'production' }, 'foo');
  assert.equal(result, undefined);
});
