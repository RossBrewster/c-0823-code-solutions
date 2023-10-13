import CustomButton from './CustomButton';

function handleCustomClick(text) {
  alert(text);
}

function App() {
  return (
    <>
      <div>
        <CustomButton
          color="Brown"
          text="I"
          onCustomClick={() => handleCustomClick('Brown button was pressed.')}
        />
        <CustomButton
          color="Salmon"
          text="Know"
          onCustomClick={() => handleCustomClick('Salmon button was pressed.')}
        />
        <CustomButton
          color="forestGreen"
          text="React!"
          onCustomClick={() => handleCustomClick('Green button was pressed.')}
        />
      </div>
    </>
  );
}

export default App;
