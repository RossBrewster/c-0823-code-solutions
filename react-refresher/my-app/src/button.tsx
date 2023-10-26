type Props = {
  text: string;
  handleClick: () => void;
};

export default function Button({ text, handleClick }: Props) {
  return <button onClick={handleClick}>{text}</button>;
}
