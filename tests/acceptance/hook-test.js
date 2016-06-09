import Ember from 'ember';
import { module, test } from 'qunit';
import startApp from '../../tests/helpers/start-app';
import { hook, $hook } from 'ember-hook';

module('Acceptance | hook', {
  beforeEach: function() {
    this.application = startApp();
  },

  afterEach: function() {
    Ember.run(this.application, 'destroy');
  }
});

test('visiting /', function(assert) {
  assert.expect(6);

  visit('/');

  andThen(() => {
    assert.equal($(hook('title')).text().trim(), 'Ember Hook');
    assert.equal($hook('title').text().trim(), 'Ember Hook');

    assert.equal($hook('component-hook').text().trim(), 'Component');

    assert.equal($hook('letter').length, 5, 'gathers all instances when no qualifiers are provided');
    assert.equal($hook('letter', { groupIndex: 0 }).length, 2, 'gathers all instances that satisfy the qualifier');
    assert.equal($hook('letter', { index: 1, groupIndex: 1 }).text().trim(), 'D', 'gathers the instance that satisfies multiple qualifiers');
  });
});
