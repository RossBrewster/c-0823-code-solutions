import { ToggleSwitch } from './ToggleSwitch';
import './App.css';

function App() {
  return (
    <>
      <ToggleSwitch size="default" />
      <h1>Switch Component</h1>
      <ToggleSwitch size="default" />
      <p>
        These componenets are the same component being passed different 'size'
        props.
      </p>
      <ToggleSwitch size="default" />
      <p>I just flipped a switch.</p>
    </>
  );
}

export default App;
