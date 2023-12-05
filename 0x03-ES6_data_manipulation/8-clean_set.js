export default function cleanSet(set, startString) {
  const strings = [];
  for (const element of set) {
    if (element.startsWith(startString) && startString !== '') {
      strings.push(element.replace(startString, ''));
    }
  }
  return strings.join('-');
}
