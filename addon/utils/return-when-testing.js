export default function returnWhenTesting(config, value) {
  if (config.environment === 'test') {
    return value;
  }
}
