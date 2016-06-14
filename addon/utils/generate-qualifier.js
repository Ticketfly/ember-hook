import delimit from 'ember-hook/utils/delimit';

export default function generateQualifier(object, key) {
  return delimit(`${key}=${object[key]}`);
}
