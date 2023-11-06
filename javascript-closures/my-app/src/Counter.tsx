import { useEffect, useState, useCallback } from 'react';

export function Counter() {
  const [counter, setCounter] = useState(0);

  const cachedGetData = useCallback(function getData() {
    // fetch data
    return { foo: 'bar' };
  }, []);

  useEffect(() => {
    cachedGetData;
    setCounter((prev) => prev + 1);
  }, [cachedGetData]);

  return <div>Fetching {counter} times</div>;
}
