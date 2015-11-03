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
  visit('/');

  andThen(() => {
    assert.equal($(hook('title')).text().trim(), 'Ember Hook');
    assert.equal($hook('title').text().trim(), 'Ember Hook');
  });
});
