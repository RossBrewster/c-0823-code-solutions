import { FaPause, FaPlay } from 'react-icons/fa';

type Props = {
  running: boolean;
  onPause?: () => void;
  onPlay?: () => void;
};

export function StartStop({ running, onPause, onPlay }: Props) {
  return running ? (
    <FaPause onClick={onPause} style={{ cursor: 'pointer' }} />
  ) : (
    <FaPlay onClick={onPlay} style={{ cursor: 'pointer' }} />
  );
}
