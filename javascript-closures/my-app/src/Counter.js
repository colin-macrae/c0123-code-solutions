import React, { useEffect, useState } from 'react';
import { useCallback } from 'react';

export default function Counter() {
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    // useCallback();
    getData();
    setCounter((prev) => prev + 1);
  }, [getData]);

  function getData() {
    // fetch data
    return { foo: 'bar' };
  }

  return <div>Fetching {counter} times</div>;
}
