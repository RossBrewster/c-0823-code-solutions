import './TimeElapsed.css';

type Props = {
  seconds: number;
  onReset: () => void;
};

export function TimeElapsed({ seconds, onReset }: Props) {
  return (
    <div className="time" onClick={onReset} style={{ cursor: 'pointer' }}>
      {Math.round(seconds * 10) / 10}
    </div>
  );
}
