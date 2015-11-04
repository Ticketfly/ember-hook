export default function getAppConfig() {
  const configName = Object.keys(requirejs.entries).filter((entry) => {
    return entry.match(/\/config\/environment/);
  })[0];

  return requirejs(configName).default;
}
