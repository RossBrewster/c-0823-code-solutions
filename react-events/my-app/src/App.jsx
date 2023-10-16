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
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          color="Salmon"
          text="Know"
          onCustomClick={handleCustomClick}
        />
        <CustomButton
          color="forestGreen"
          text="React!"
          onCustomClick={handleCustomClick}
        />
      </div>
    </>
  );
}

export default App;
