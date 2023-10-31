import './App.css';
import { useState } from 'react';
// import { RotatingBanner } from './RotatingBanner';
import { Indicators } from './Indicators';
import { CustomButton } from './CustomButton';

const items = [
  'Aardvark',
  'Bengal',
  'Caterpillar',
  'Dromedary',
  'Elephant',
  'Ferret',
];

function App() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function tapNext() {
    if (currentIndex === items.length - 1) {
      setCurrentIndex(0);
    } else {
      setCurrentIndex(currentIndex + 1);
    }
  }

  function tapPrev() {
    if (currentIndex === 0) {
      setCurrentIndex(items.length - 1);
    } else {
      setCurrentIndex(currentIndex - 1);
    }
  }

  function pickIndex(index: number) {
    setCurrentIndex(index);
  }

  return (
    <div>
      <h2>{items[currentIndex]}</h2>
      <CustomButton text="Prev" handleClick={tapPrev} />
      <Indicators
        items={items}
        highlighted={currentIndex}
        handleClick={pickIndex}
      />
      <CustomButton text="Next" handleClick={tapNext} />
    </div>
  );
}

export default App;
