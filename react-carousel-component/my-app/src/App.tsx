import { useState } from 'react';
import './App.css';
import { Carousel } from './Carousel';

const images: { url: string; id: number }[] = [
  {
    url: 'https://media3.giphy.com/media/l2JhL1AzTxORUTDlC/200.webp?cid=ecf05e47et9a86qhnai0nse193sobupebq2u5ljqnkylv7a8&ep=v1_gifs_search&rid=200.webp&ct=g',
    id: 1,
  },
  {
    url: 'https://media3.giphy.com/media/DhstvI3zZ598Nb1rFf/200.webp?cid=ecf05e47et9a86qhnai0nse193sobupebq2u5ljqnkylv7a8&ep=v1_gifs_search&rid=200.webp&ct=g',
    id: 2,
  },
  {
    url: 'https://media0.giphy.com/media/pHYaWbspekVsTKRFQT/200w.webp?cid=ecf05e47et9a86qhnai0nse193sobupebq2u5ljqnkylv7a8&ep=v1_gifs_search&rid=200w.webp&ct=g',
    id: 3,
  },
  {
    url: 'https://media4.giphy.com/media/j3gsT2RsH9K0w/giphy.webp?cid=ecf05e47et9a86qhnai0nse193sobupebq2u5ljqnkylv7a8&ep=v1_gifs_search&rid=giphy.webp&ct=g',
    id: 4,
  },
];

function App() {
  const [viewing, setViewing] = useState(0);

  function handleNextClick() {
    if (viewing === images.length - 1) {
      setViewing(0);
    } else {
      setViewing(viewing + 1);
    }
  }

  function handlePrevClick() {
    if (viewing === 0) {
      setViewing(images.length - 1);
    } else {
      setViewing(viewing - 1);
    }
  }

  function handleDotClick(i: number) {
    setViewing(i);
  }

  return (
    <Carousel
      viewing={viewing}
      images={images}
      handleNextClick={handleNextClick}
      handlePrevClick={handlePrevClick}
      onClick={handleDotClick}
    />
  );
}

export default App;
