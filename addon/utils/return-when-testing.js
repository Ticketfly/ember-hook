export default function returnWhenTesting(config, value, forceHook) {
  // in case the dev wants to force ember-hook to activate, regardless of environment.
  // useful while unit testing
  if (forceHook) {
    return value;
  }

  // unit tests won't have a config. simply return to avoid an error
  if (!config) {
    return;
  }

  if (config.environment === 'test') {
    return value;
  }
}
