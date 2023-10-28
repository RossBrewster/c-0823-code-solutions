import './VideoBackground.css';
type Prop = {
  sample: string;
};

export function VideoBackground({ sample }: Prop) {
  return (
    <video id="background-video" autoPlay muted loop>
      <source src={sample} type="video/mp4" />
    </video>
  );
}
