import React from 'react';

interface BarChartData {
  label: string;
  value: number;
  color?: string;
}

interface BarChartProps {
  data: BarChartData[];
  width?: number; // largeur totale du graphique en px
  height?: number; // hauteur totale en px
  barWidth?: number; // largeur d’une barre
  maxValue?: number; // valeur max (si non définie, prend max data.value)
}

const BarChart: React.FC<BarChartProps> = ({
  data,
  width = 500,
  height = 300,
  barWidth = 40,
  maxValue,
}) => {
  const max = maxValue ?? Math.max(...data.map(d => d.value));
  const margin = 40; // marge pour axes et labels

  const scaleY = (val: number) => (val / max) * (height - margin * 1.5);

  return (
    <svg width={width} height={height}>
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
              fill='#555'
            >
              {val}
            </text>
          </g>
        );
      })}

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
              fill={d.color || '#4caf50'}
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
  );
};

export default BarChart;
