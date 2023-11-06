type Props = {
  text: string;
  onClick: () => void;
};

export function CustomButton({ text, onClick }: Props) {
  return <button onClick={onClick}>{text}</button>;
}
