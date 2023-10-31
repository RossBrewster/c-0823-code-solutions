type Props = {
  list: string[];
};

export function List({ list }: Props) {
  const listItems = list.map((quote, index) => (
    <li key={index} style={{ textAlign: 'left' }}>
      {quote}
    </li>
  ));

  return <ul>{listItems}</ul>;
}
