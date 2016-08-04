import Ember from 'ember';

const { get } = Ember;

export default function returnWhenTesting(config, value) {
  const enabled = get(config, 'emberHook.enabled');

  if (typeof enabled === 'boolean' ? enabled : config.environment === 'test' || config.environment === 'development') {
    return value;
  }
}
