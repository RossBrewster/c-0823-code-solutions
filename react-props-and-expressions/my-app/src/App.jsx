import './App.css';
import CustomButton from './CustomButton';

function App() {
  return (
    <>
      <div>
        <CustomButton text="I" color={'red'} />
        <CustomButton text="Know" color={'green'} />
        <CustomButton text="React!" color={'blue'} />
      </div>
    </>
  );
}

export default App;
