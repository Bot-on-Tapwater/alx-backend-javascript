const weakMap = new WeakMap();

const queryAPI = (endPoint) => {
  if (!weakMap.has(endPoint)) {
    weakMap.set(endPoint, 1);
  } else {
    const queries = weakMap.get(endPoint);

    // console.log('Queries:', queries);

    weakMap.set(endPoint, queries + 1);

    if (queries >= 5) throw new Error('Endpoint load is high');
  }
};

export { queryAPI, weakMap };