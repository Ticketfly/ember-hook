import Ember from 'ember';
import config from 'ember-get-config';
import decorateHook from 'ember-hook/utils/decorate-hook';
import delimit from 'ember-hook/utils/delimit';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';

const { Helper } = Ember;

/**
 * Test if an object is empty `Ember.isEmpty` surprisingly doesn't do that
 * @see {@link https://github.com/emberjs/ember.js/issues/5543}
 * @see {@link https://github.com/emberjs/ember.js/blob/v2.10.0/packages/ember-metal/lib/is_empty.js}
 *
 * @param {Object} obj - the object to test
 * @returns {Boolean} true if there are no keys on the object
 */
function isEmpty (obj = {}) {
  if (obj === null) {
    return true;
  }

  return Object.keys(obj).length === 0;
}

export function hook([hook, qualifierObj = {}], attributes = {}) {
  if (typeof qualifierObj !== 'object') {
    throw new Error(`The qualifier object passed to the "hook" helper must be an object not a ${typeof qualifierObj}`);
  }

  if (!isEmpty(qualifierObj) && !isEmpty(attributes)) {
    throw new Error('Either provide your own qualifier object, or add attributes to the "hook" helper, not both.');
  }

  let qualifiers = isEmpty(qualifierObj) ? attributes : qualifierObj;
  return returnWhenTesting(config, decorateHook(delimit(hook), qualifiers));
}

export default Helper.helper(hook);
