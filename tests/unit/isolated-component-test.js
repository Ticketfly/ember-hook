import { moduleForComponent, test } from 'ember-qunit';
import { hook } from 'ember-hook';

moduleForComponent('test-component', 'Unit | Component | test component', {
  // Specify the other units that are required for this test
  // needs: ['component:foo', 'helper:bar']
  needs: ['helper:hook']
});

test('component hooks work in isolated unit tests', function(assert) {
  assert.expect(1);

  this.subject({
    text: 'foo'
  }); 

  assert.equal(this.$(hook('internal-text')).text().trim(), 'foo', 'hook is registered');
});
