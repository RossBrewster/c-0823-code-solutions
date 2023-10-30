// import { useRef, useEffect } from 'react';
import './EndlessBanner.css';

type EndlessBannerProps = {
  text: string;
  speed?: number;
};

export function EndlessBanner({ text, speed }: EndlessBannerProps) {
  return (
    <div className="banner-container">
      <div
        className="scrolling-banner"
        style={{ animationDuration: `${speed}s` }}>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
      <div
        className="scrolling-banner"
        style={{ animationDuration: `${speed}s` }}>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
        <span className="marquee-text">{text}</span>
      </div>
    </div>
  );
}

export default EndlessBanner;
