type Props = {
  item: string;
  onClick: () => void;
};

export function MenuItem({ item, onClick }: Props) {
  return (
    <a onClick={onClick} href="#0">
      {item}
    </a>
  );
}
