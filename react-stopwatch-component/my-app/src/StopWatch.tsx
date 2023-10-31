import { StartStop } from './StartStop';
import { TimeElapsed } from './TimeElapsed';
import { useState } from 'react';

export function StopWatch() {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(false);

  function handlePlay() {
    setRunning(!running);
  }

  const intervalId = running
    ? setTimeout(() => {
        setTime(time + 0.01);
      }, 10)
    : undefined;

  function handlePause() {
    setRunning(!running);
    clearInterval(intervalId);
  }

  function handleReset() {
    if (!running) {
      setTime(0);
    }
  }

  return (
    <>
      <TimeElapsed seconds={time} onReset={handleReset} />
      <StartStop
        running={running}
        onPause={running ? handlePause : undefined}
        onPlay={!running ? handlePlay : undefined}
      />
    </>
  );
}
