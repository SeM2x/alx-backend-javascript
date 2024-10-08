export default function cleanSet(set, startString) {
  if (!startString) return '';
  return Array.from(set)
    .filter((str) => str.startsWith(startString))
    .map((str) => str.slice(startString.length))
    .join('-');
}
