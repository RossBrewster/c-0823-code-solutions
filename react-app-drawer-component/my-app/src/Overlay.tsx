import './Overlay.css';
type Props = {
  isOpen: boolean;
  onMain: () => void;
};

export function Overlay({ isOpen, onMain }: Props) {
  return isOpen ? (
    <div className="semi-transparent" onClick={onMain}></div>
  ) : (
    <div className="transparent" onClick={onMain}></div>
  );
}
