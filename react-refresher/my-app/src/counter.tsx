import { useState } from 'react';
import Button from './button';

export default function Counter() {
  const [count, setCount] = useState(0);

  function increment() {
    setCount(count + 1);
  }

  function decrement() {
    setCount(count - 1);
  }

  return (
    <>
      <Button text="Increment" handleClick={increment} />
      <p>{count}</p>
      <Button text="Decrement" handleClick={decrement} />
    </>
  );
}
