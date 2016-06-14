import Ember from 'ember';
import config from 'ember-get-config';

const { get } = Ember;

export default get(config, 'emberHook.delimiter') || '&^%^&';
