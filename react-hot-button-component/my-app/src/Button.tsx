type Props = {
  color: string;
  handleClick: () => void;
};
export default function Button({ color, handleClick }: Props) {
  return (
    <button
      style={{
        backgroundColor: color,
        color: 'White',
        border: 'solid black 2px',
      }}
      onClick={handleClick}>
      Hot Button
    </button>
  );
}
