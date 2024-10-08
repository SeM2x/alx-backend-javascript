export default function cleanSet(set, startString) {
  if (!startString || typeof startString !== 'string') return '';
  return Array.from(set)
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
}
