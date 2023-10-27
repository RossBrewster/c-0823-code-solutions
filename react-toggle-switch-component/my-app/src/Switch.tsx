import { useState } from 'react';

export function Switch() {
  const [isON, setIsON] = useState(false);

  let classValue;
  let text;

  if (isON === false) {
    classValue = 'off';
    text = 'off';
  } else {
    classValue = 'on';
    text = 'on';
  }

  return (
    <>
      <div
        onClick={() => {
          setIsON(!isON);
        }}
        className={classValue}
        id="container">
        <div id="switch"></div>
      </div>
      <p>{text}</p>
    </>
  );
}
