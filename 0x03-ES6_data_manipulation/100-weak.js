const weakMap = new WeakMap();

function queryAPI(endpoint) {
  const queryCount = weakMap.get(endpoint) || 0;

  if (queryCount >= 5) {
    throw new Error('Endpoint load is high');
  }

  weakMap.set(endpoint, queryCount + 1);
}

export { queryAPI, weakMap };
