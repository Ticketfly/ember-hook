import Ember from 'ember';
import config from 'ember-get-config';
import decorateHook from 'ember-hook/utils/decorate-hook';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';

const { Helper } = Ember;

export default Helper.extend({
  compute(params, qualifiers = {}) {
    const [hook] = params;

    return returnWhenTesting(config, decorateHook(hook, qualifiers));
  }
});
