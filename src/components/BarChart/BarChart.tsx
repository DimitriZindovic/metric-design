import React, { useRef } from 'react';

interface BarChartData {
  label: string;
  value: number;
  color?: string;
}

interface Threshold {
  value: number;
  label?: string;
  color?: string;
  strokeWidth?: number;
}

interface BarChartProps {
  data: BarChartData[];
  width?: number;
  height?: number;
  barWidth?: number;
  maxValue?: number;
  isHorizontal?: boolean;
  thresholds?: Threshold[];
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  width = 600,
  height = 300,
  barWidth = 40,
  maxValue,
  isHorizontal = false,
  thresholds = [],
}) => {
  const svgRef = useRef<SVGSVGElement>(null);

  const max = maxValue ?? Math.max(...data.map(d => d.value));
  const margin = 35;

  const exportSVG = () => {
    if (!svgRef.current) return;
    const svgData = new XMLSerializer().serializeToString(svgRef.current);
    const svgBlob = new Blob([svgData], {
      type: 'image/svg+xml;charset=utf-8',
    });
    const svgUrl = URL.createObjectURL(svgBlob);
    const downloadLink = document.createElement('a');
    downloadLink.href = svgUrl;
    downloadLink.download = 'bar-chart.svg';
    document.body.appendChild(downloadLink);
    downloadLink.click();
    document.body.removeChild(downloadLink);
  };

  if (!isHorizontal) {
    // Vertical
    const scaleY = (val: number) => (val / max) * (height - margin * 1.5);
    return (
      <>
        <button onClick={exportSVG} style={{ marginBottom: 10 }}>
          Export SVG
        </button>
        <svg
          ref={svgRef}
          width={width}
          height={height}
          data-testid='bar-chart-svg'
        >
          {/* Axe Y */}
          {[0, 0.25, 0.5, 0.75, 1].map(p => {
            const y = height - margin - p * (height - margin * 1.5);
            const val = Math.round(max * p);
            return (
              <g key={p}>
                <line x1={margin} y1={y} x2={width} y2={y} stroke='#ccc' />
                <text
                  x={margin - 10}
                  y={y + 5}
                  fontSize={12}
                  textAnchor='end'
                  fill='black'
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Seuils */}
          {thresholds.map(
            ({ value, label, color = 'red', strokeWidth = 2 }, i) => {
              const y =
                height - margin - (value / max) * (height - margin * 1.5);
              return (
                <g key={'threshold-' + i}>
                  <line
                    x1={margin}
                    y1={y}
                    x2={width}
                    y2={y}
                    stroke={color}
                    strokeDasharray='4 4'
                    strokeWidth={strokeWidth}
                  />
                  {label && (
                    <text
                      x={width - 5}
                      y={y - 5}
                      fontSize={12}
                      fill={color}
                      textAnchor='end'
                      fontWeight='bold'
                    >
                      {label}
                    </text>
                  )}
                </g>
              );
            }
          )}

          {/* Barres */}
          {data.map((d, i) => {
            const barHeight = scaleY(d.value);
            const x = margin + i * (barWidth + 20);
            const y = height - margin - barHeight;
            return (
              <g key={d.label}>
                <rect
                  x={x}
                  y={y}
                  width={barWidth}
                  height={barHeight}
                  fill={d.color || '#3b82f6'}
                  rx={4}
                />
                <text
                  x={x + barWidth / 2}
                  y={height - margin + 15}
                  fontSize={14}
                  fill='#333'
                  textAnchor='middle'
                >
                  {d.label}
                </text>
                <text
                  x={x + barWidth / 2}
                  y={y - 5}
                  fontSize={12}
                  fill='#333'
                  textAnchor='middle'
                >
                  {d.value}
                </text>
              </g>
            );
          })}
        </svg>
      </>
    );
  } else {
    // Horizontal
    const scaleX = (val: number) => (val / max) * (width - margin * 1.5);

    return (
      <>
        <button onClick={exportSVG} style={{ marginBottom: 10 }}>
          Export SVG
        </button>
        <svg
          ref={svgRef}
          width={width}
          height={height}
          data-testid='bar-chart-svg'
        >
          {/* Axe X */}
          {[0, 0.25, 0.5, 0.75, 1].map(p => {
            const x = margin + p * (width - margin * 1.5);
            const val = Math.round(max * p);
            return (
              <g key={p}>
                <line
                  y1={height - margin}
                  y2={margin}
                  x1={x}
                  x2={x}
                  stroke='#ccc'
                />
                <text
                  y={height - margin + 15}
                  x={x}
                  fontSize={12}
                  textAnchor='middle'
                  fill='#555'
                >
                  {val}
                </text>
              </g>
            );
          })}

          {/* Seuils */}
          {thresholds.map(
            ({ value, label, color = 'red', strokeWidth = 2 }, i) => {
              const x = margin + (value / max) * (width - margin * 1.5);
              return (
                <g key={'threshold-' + i}>
                  <line
                    y1={margin}
                    y2={height - margin}
                    x1={x}
                    x2={x}
                    stroke={color}
                    strokeDasharray='4 4'
                    strokeWidth={strokeWidth}
                  />
                  {label && (
                    <text
                      y={margin - 5}
                      x={x}
                      fontSize={12}
                      fill={color}
                      textAnchor='middle'
                      fontWeight='bold'
                    >
                      {label}
                    </text>
                  )}
                </g>
              );
            }
          )}

          {/* Barres */}
          {data.map((d, i) => {
            const barLength = scaleX(d.value);
            const y = margin + i * (barWidth + 20);
            return (
              <g key={d.label}>
                <rect
                  y={y}
                  x={margin}
                  height={barWidth}
                  width={barLength}
                  fill={d.color || '#3b82f6'}
                  rx={4}
                />
                <text
                  y={y + barWidth / 2 + 5}
                  x={margin - 10}
                  fontSize={14}
                  fill='#333'
                  textAnchor='end'
                >
                  {d.label}
                </text>
                <text
                  y={y + barWidth / 2 + 5}
                  x={margin + barLength + 4}
                  fontSize={12}
                  fill='#333'
                  textAnchor='start'
                >
                  {d.value}
                </text>
              </g>
            );
          })}
        </svg>
      </>
    );
  }
};

export default BarChart;
