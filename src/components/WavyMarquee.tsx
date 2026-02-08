import './WavyMarquee.css';

interface WavyMarqueeProps {
  text: string;
  className?: string;
}

export function WavyMarquee({ text, className = '' }: WavyMarqueeProps) {
  // 매우 부드러운 사인파 곡선 생성
  const generateSmoothSinePath = () => {
    const width = 6000;
    const height = 120;
    const centerY = height / 2;
    const amplitude = 15; // 낮은 진폭
    const frequency = 5;  // 적은 파동 수 (완만한 곡선)
    const points = 200;   // 많은 포인트로 부드럽게

    let path = `M 0 ${centerY}`;

    for (let i = 1; i <= points; i++) {
      const x = (width / points) * i;
      const y = centerY + Math.sin((i / points) * Math.PI * 2 * frequency) * amplitude;
      path += ` L ${x} ${y}`;
    }

    return path;
  };

  const repeatedText = `${text}   ✦   `.repeat(15);

  return (
    <div className={`wavy-marquee ${className}`}>
      <svg
        viewBox="0 0 6000 120"
        preserveAspectRatio="xMidYMid slice"
        className="wavy-marquee-svg"
      >
        <defs>
          <path
            id="smoothWavePath"
            d={generateSmoothSinePath()}
            fill="none"
          />
        </defs>
        <text className="wavy-marquee-text">
          <textPath
            href="#smoothWavePath"
            startOffset="0%"
          >
            {repeatedText}
            <animate
              attributeName="startOffset"
              from="0%"
              to="-50%"
              dur="25s"
              repeatCount="indefinite"
            />
          </textPath>
        </text>
      </svg>
    </div>
  );
}
