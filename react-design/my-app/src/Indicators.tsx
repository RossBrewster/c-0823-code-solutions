type Props = {
  items: string[];
  highlighted: number;
  handleClick: (e: number) => void;
};

export function Indicators({ items, highlighted, handleClick }: Props) {
  return (
    <div
      style={{
        display: 'flex',
        gap: '1rem',
      }}>
      {items.map((_, index) => (
        <div
          key={index}
          id={`${index}`}
          onClick={() => handleClick(index)}
          style={{
            border: '1px solid black',
            padding: '.25rem .5rem',
            borderRadius: '4px',
            cursor: 'pointer',
            backgroundColor: highlighted === index ? '#ECF5FD' : 'transparent',
          }}>
          {index + 1}
        </div>
      ))}
    </div>
  );
}
