type Prop = {
  text: string;
  handleClick?: () => void;
};

export function CustomButton({ text, handleClick }: Prop) {
  return (
    <button
      onClick={handleClick}
      style={{
        margin: '1rem',
        // marginTop: "0",
        backgroundColor: 'transparent',
        border: '1px solid black',
      }}>
      {text}
    </button>
  );
}
