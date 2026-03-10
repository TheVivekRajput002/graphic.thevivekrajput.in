// components/DynamicBadge.tsx

interface DynamicBadgeProps {
  text: string;
  height?: number;
  className?: string;
  fillColor?: string;
  textColor?: string;
  fontSize?: number;
}

export default function DynamicBox({
  text,
  height = 76,
  className = "",
  fillColor = "#0E1011",
  textColor = "#ffffff",
  fontSize = 16,
}: DynamicBadgeProps) {
  const paddingX = 0;
  const estimatedCharWidth = fontSize * 0.6;
  const textWidth = text.length * estimatedCharWidth + paddingX * 2;
  const minWidth = 110;
  const width = Math.max(minWidth, textWidth + 10); // +60 for the left notch

  // Scale the notch/left-cut shape proportionally with height
  const scaleY = height / 76;
  const notchX = (34.957 / 256) * width;
  const cornerRadius = 25.762 * scaleY;

  // Control points scaled
  const topY = 0;
  const bottomY = height;
  const notchTopY = (25.3486 / 76) * height;
  const notchBottomY = (49.959 / 76) * height;
  const cutX = (10 / 256) * width;

  const path = `
    M ${width} ${topY}
    V ${bottomY}
    H ${notchX + cornerRadius}
    C ${notchX} ${bottomY} ${notchX} ${bottomY} ${notchX} ${notchBottomY}
    V ${notchTopY}
    C ${notchX} ${topY} ${notchX} ${topY} ${cutX} ${topY * 0.3 + (notchTopY * 0)}
    L 2.5 ${topY}
    H ${width}
    Z
  `.trim();

  return (
    <div className={`relative inline-flex items-center text-center ${className}`}>
      <svg
        width={width}
        height={height}
        viewBox={`0 0 ${width} ${height}`}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="absolute inset-0"
      >
        <path
          d={`M${width} 0 V${height} H${notchX + cornerRadius}
             Q${notchX} ${height} ${notchX} ${notchBottomY}
             V${notchTopY}
             Q${notchX} 0 ${cutX} 0
             H${width} Z`}
          fill={fillColor}
          stroke="black"
          strokeWidth="0.56176"
        />
      </svg>
      <span
        style={{
          fontSize: `${fontSize}px`,
          color: textColor,
          paddingLeft: `${60 + paddingX}px`, // offset for left notch
          paddingRight: `${paddingX}px`,
          lineHeight: `${height}px`,
          position: "relative",
          whiteSpace: "nowrap",
          zIndex: 10,
        }}
      >
        {text}
      </span>
    </div>
  );
}