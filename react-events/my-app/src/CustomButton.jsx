function CustomButton({ color, text, onCustomClick }) {
  return (
    <button
      onClick={() => onCustomClick(text)}
      style={{
        backgroundColor: color,
        color: 'white',
      }}>
      {text}
    </button>
  );
}

export default CustomButton;
