export default function updateUniqueItems(mapObj) {
  if (!(mapObj instanceof Map)) {
    throw new Error('Cannot process');
  } else {
    mapObj.forEach((value, key, map) => {
      if (value === 1) {
        const updated = map.set(key, 100);

        if (updated === undefined) {
          throw new Error('Cannot process');
        }
      }
    });
  }
}
