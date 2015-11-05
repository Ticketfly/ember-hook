import getAppConfig from 'ember-hook/utils/get-app-config';
import { module, test } from 'qunit';

module('Unit | Utility | get app config');

test('it returns the app config file', function(assert) {
  const result = getAppConfig();

  assert.equal(result.environment, 'test');
});
