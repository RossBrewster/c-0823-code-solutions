import { CustomButton } from './CustomButton';
import { Indicators } from './Indicators';
type Props = {
  viewing: number;
  images: { url: string; id: number }[];
  handlePrevClick: () => void;
  handleNextClick: () => void;
  onClick: (i: number) => void;
};

export function Carousel({
  viewing,
  images,
  handlePrevClick,
  handleNextClick,
  onClick,
}: Props) {
  return (
    <>
      <div style={{ display: 'flex', alignItems: 'center' }}>
        <CustomButton text="prev" onClick={handlePrevClick} />
        <img src={images[viewing].url} alt="dance"></img>
        <CustomButton text="next" onClick={handleNextClick} />
      </div>
      <Indicators images={images} viewing={viewing} onClick={onClick} />
    </>
  );
}
