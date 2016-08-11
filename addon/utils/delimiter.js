import Ember from 'ember';
import config from 'ember-get-config';

const { get } = Ember;

let delimiter = get(config, 'emberHook.delimiter');

if (typeof delimiter === 'undefined') {
  delimiter = '&^%^&';
}

export default delimiter;
