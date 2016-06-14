import delimiter from 'ember-hook/utils/delimiter';

export default function delimit(base) {
  return `${base}${delimiter}`;
}
