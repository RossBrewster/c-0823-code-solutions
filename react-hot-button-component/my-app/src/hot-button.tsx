import Button from './Button';
import { useState } from 'react';

export default function HotButton() {
  const [count, setCount] = useState(0);
  function increment() {
    setCount(count + 1);
  }
  let color = '#48A400';

  if (count < 3) {
    color = '#48A400';
  } else if (count >= 3 && count < 6) {
    color = '#351C75';
  } else if (count >= 6 && count < 9) {
    color = '#674EA7';
  } else if (count >= 9 && count < 12) {
    color = '#E06666';
  } else if (count >= 12 && count < 15) {
    color = '#F6B26A';
  } else if (count >= 15 && count < 18) {
    color = '#FFFF04';
  } else if (count >= 18) {
    color = '#FFF';
  }
  return <Button color={color} handleClick={increment} />;
}
