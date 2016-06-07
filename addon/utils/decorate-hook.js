import generateQualifier from './generate-qualifier';

export default function decorateHook(hook, qualifiers, wrapper = (text) => text) {
  return Object.keys(qualifiers).sort().reduce((decoratedHook, key) => {
    return `${decoratedHook}${wrapper(generateQualifier(qualifiers, key))}`;
  }, hook);
}
