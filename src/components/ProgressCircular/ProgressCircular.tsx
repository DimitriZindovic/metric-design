import React from 'react';

interface ProgressCircularProps {
  size?: number; // diamètre total du cercle en px
  strokeWidth?: number; // épaisseur du trait
  progress: number; // progression 0-100
  circleOneStroke?: string; // couleur cercle fond
  circleTwoStroke?: string; // couleur progression
  showPercentage?: boolean; // afficher le % au centre
  percentageFontSize?: number; // taille police pourcentage en px (optionnel)
  disableAnimation?: boolean;
}

const ProgressCircular: React.FC<ProgressCircularProps> = ({
  size = 120,
  strokeWidth = 10,
  progress,
  circleOneStroke = '#e0e0e0',
  circleTwoStroke = '#3b82f6',
  showPercentage = true,
  percentageFontSize,
}) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (progress / 100) * circumference;

  return (
    <svg
      width={size}
      height={size}
      role='progressbar'
      aria-valuenow={progress}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <circle
        stroke={circleOneStroke}
        fill='transparent'
        strokeWidth={strokeWidth}
        r={radius}
        cx={size / 2}
        cy={size / 2}
      />
      <circle
        stroke={circleTwoStroke}
        fill='transparent'
        strokeWidth={strokeWidth}
        strokeLinecap='round'
        r={radius}
        cx={size / 2}
        cy={size / 2}
        strokeDasharray={circumference}
        strokeDashoffset={strokeDashoffset}
        style={{ transition: 'stroke-dashoffset 0.5s ease' }}
        transform={`rotate(-90 ${size / 2} ${size / 2})`}
      />
      {showPercentage && (
        <text
          x='50%'
          y='50%'
          dy='.3em'
          textAnchor='middle'
          fontSize={percentageFontSize ?? size * 0.2}
          fill={circleTwoStroke}
          fontWeight='bold'
        >
          {Math.round(progress)}%
        </text>
      )}
    </svg>
  );
};

export default ProgressCircular;
