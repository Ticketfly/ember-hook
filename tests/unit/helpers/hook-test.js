import { hook } from 'dummy/helpers/hook';
import { module, test } from 'qunit';

module('Unit | Helper | hook');

test('it handles simple case', function(assert) {
  let result = hook(['myHook']);
  assert.equal(result, 'myHook&^%^&', 'constructs the hook properly');
});

test('it handles qualifier attribute case', function(assert) {
  let result = hook(['myHook'], {foo: 'bar', fizz: 'bang'});
  assert.equal(result, 'myHook&^%^&fizz=bang&^%^&foo=bar&^%^&', 'constructs the hook properly');
});

test('it handles qualifier object case', function(assert) {
  let result = hook(['myHook', {foo: 'bar'}]);
  assert.equal(result, 'myHook&^%^&foo=bar&^%^&', 'constructs the hook properly');
});

test('it errors when including both a qualifier object and qualifier attributes', function(assert) {
  assert.throws(
    function () {
      hook(['myHook', {foo: 'bar'}], {fizz: 'bang'});
    },
    /Either provide your own qualifier object, or add attributes to the "hook" helper, not both/,
    'raised error includes proper message'
  );
});

test('it errors when passing in a non-object as a qualifer object', function(assert) {
  assert.throws(
    function () {
      hook(['myHook', 'foo-bar'], {fizz: 'bang'});
    },
    /The qualifier object passed to the "hook" helper must be an object not a string/,
    'raised error includes proper message'
  );
});
