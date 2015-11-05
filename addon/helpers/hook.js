import Ember from 'ember';
import returnWhenTesting from 'ember-hook/utils/return-when-testing';
import getAppConfig from 'ember-hook/utils/get-app-config';

const { Helper } = Ember;

export default Helper.extend({
  compute(params) {
    const [hook] = params;
    const config = getAppConfig();

    return returnWhenTesting(config, hook);
  }
});
