import './ToggleSwitch.css';
import { useState } from 'react';
type Prop = {
  size: string;
};
export function ToggleSwitch({ size }: Prop) {
  const [isOn, setIsOn] = useState(false);

  const color = isOn ? 'green ' : 'red ';

  const className = color + size;

  return (
    <div id="wrapper" className={className} onClick={() => setIsOn(!isOn)}>
      <div id="switch" className={size}></div>
    </div>
  );
}
