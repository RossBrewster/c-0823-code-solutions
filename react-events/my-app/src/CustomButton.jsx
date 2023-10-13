function CustomButton({ color, text, onCustomClick }) {
  return (
    <button
      onClick={onCustomClick}
      style={{
        backgroundColor: color,
        color: 'white',
      }}>
      {text}
    </button>
  );
}

export default CustomButton;
