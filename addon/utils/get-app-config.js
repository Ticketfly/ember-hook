export default function getAppConfig() {
  const configName = Object.keys(requirejs.entries).find((entry) => {
    return entry.match(/\/config\/environment/);
  });

  return requirejs(configName).default;
}
