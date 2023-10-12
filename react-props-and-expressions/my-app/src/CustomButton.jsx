export default function CustomButton({ text, color }) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'white',
      }}>
      {text}
    </button>
  );
}
