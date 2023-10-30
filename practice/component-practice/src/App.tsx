import { VideoBackground } from './components/VideoBackground';
import sampleVideo from './components/videos/arial.mp4';
import EndlessBanner from './components/EndlessBanner';
import './App.css';

function App() {
  return (
    <>
      <VideoBackground sample={sampleVideo} />
      <EndlessBanner text={'Sign Up Today'} speed={10} />
      <h1>Writ99</h1>
      <button id="transparent-button">login</button>
    </>
  );
}

export default App;
