import React from 'react';

interface ProgressLinearProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: number | string;
  height?: number;
  progress: number;
  backgroundColor?: string;
  progressColor?: string;
  animated?: boolean;
  animationSpeed?: number;
  showPercentage?: boolean;
  disableAnimation?: boolean;
}

const ProgressLinear: React.FC<ProgressLinearProps> = ({
  size = '100%',
  height = 20,
  progress,
  backgroundColor = '#e0e0e0',
  progressColor = '#3b82f6',
  animated = false,
  animationSpeed = 1.5,
  showPercentage = false,
  disableAnimation = false,
  ...rest
}) => {
  return (
    <div
      style={{ width: size, display: 'flex', alignItems: 'center', gap: 8 }}
      {...rest}
    >
      <div
        style={{
          flexGrow: 1,
          height,
          backgroundColor,
          borderRadius: height / 2,
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        {animated && !disableAnimation ? (
          <div
            style={{
              position: 'absolute',
              width: '30%',
              height: '100%',
              backgroundColor: progressColor,
              borderRadius: height / 2,
              animation: `progress-indeterminate ${animationSpeed}s infinite`,
            }}
          />
        ) : (
          <div
            style={{
              width: `${Math.min(Math.max(progress, 0), 100)}%`,
              height: '100%',
              backgroundColor: progressColor,
              borderRadius: height / 2,
              transition: disableAnimation ? 'none' : 'width 0.4s ease',
            }}
          />
        )}
      </div>
      {showPercentage && (
        <div style={{ minWidth: 35, textAlign: 'right', fontWeight: 'bold' }}>
          {Math.round(progress)}%
        </div>
      )}

      <style>
        {`
          @keyframes progress-indeterminate {
            0% {
              left: -30%;
            }
            50% {
              left: 100%;
            }
            100% {
              left: 100%;
            }
          }
        `}
      </style>
    </div>
  );
};

export default ProgressLinear;
