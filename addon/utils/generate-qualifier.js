import Ember from 'ember';
import config from 'ember-get-config';

const { get } = Ember;

const delimiter = get(config, 'emberHook.delimiter') || '&^%^&';

export default function generateQualifier(object, key) {
  return `${delimiter}${key}=${object[key]}`;
}
