import { VideoBackground } from './components/VideoBackground';
import sampleVideo from './components/groovy-back.mp4';
import './App.css';

function App() {
  return (
    <>
      <VideoBackground sample={sampleVideo} />
      <h1>Writ99</h1>
      <button id="transparent-button">login</button>
    </>
  );
}

export default App;
