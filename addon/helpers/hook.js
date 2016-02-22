import Ember from 'ember';
import config from 'ember-get-config';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';

const { Helper } = Ember;

export default Helper.extend({
  compute(params) {
    const [hook] = params;

    return returnWhenTesting(config, hook);
  }
});
