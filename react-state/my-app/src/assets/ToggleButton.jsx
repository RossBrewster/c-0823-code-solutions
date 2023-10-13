import { useState } from 'react';

function ToggleButton({ text, color, color2, text2 }) {
  const [isClicked, setIsClicked] = useState(false);

  function handleClick() {
    setIsClicked(!isClicked);
  }
  if (isClicked) {
    return (
      <button onClick={() => handleClick()} style={{ backgroundColor: color }}>
        {text}
      </button>
    );
  } else {
    return (
      <button onClick={() => handleClick()} style={{ backgroundColor: color2 }}>
        {text2}
      </button>
    );
  }
}
export default ToggleButton;
