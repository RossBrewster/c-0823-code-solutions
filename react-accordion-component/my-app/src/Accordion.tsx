import './Accordion.css';
type Description = { [key: string]: boolean };

type Props = {
  content: {
    language: string;
    description: string;
  }[];
  descriptionVis: Description;
  toggleVis: (language: string) => void;
};

export function Accordion({ content, descriptionVis, toggleVis }: Props) {
  const accordionItems = content.map((items) => {
    return (
      <div className="accordion">
        <div
          className="language-name"
          style={{ cursor: 'pointer' }}
          onClick={() => toggleVis(items.language)}>
          {items.language}
        </div>
        {descriptionVis[items.language] ? (
          <div className="visible">{items.description}</div>
        ) : (
          <div className="hidden">{items.description}</div>
        )}
      </div>
    );
  });

  return <div>{accordionItems}</div>;
}
