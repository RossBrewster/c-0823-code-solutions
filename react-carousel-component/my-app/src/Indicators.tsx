import { TiMediaRecord, TiMediaRecordOutline } from 'react-icons/ti';

type Props = {
  viewing: number;
  images: { url: string; id: number }[];
  onClick: (i: number) => void;
};

export function Indicators({ viewing, images, onClick }: Props) {
  return images.map((element) => {
    if (viewing === element.id - 1) {
      return <TiMediaRecordOutline key={element.id} />;
    } else {
      return (
        <TiMediaRecord
          key={element.id}
          onClick={() => onClick(element.id - 1)}
          style={{ cursor: 'pointer' }}
        />
      );
    }
  });
}
