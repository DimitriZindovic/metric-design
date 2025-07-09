import React from 'react';
import BarChart from './components/BarChart/BarChart';

function App() {
  const sampleData = [
    { label: 'Jan', value: 40 },
    { label: 'Feb', value: 80 },
    { label: 'Mar', value: 65 },
    { label: 'Apr', value: 90 },
    { label: 'May', value: 55, color: '#f44336' },
  ];

  const thresholds = [
    { value: 70, label: 'Objectif', color: 'red', strokeWidth: 2 },
    { value: 50, label: 'Moyenne', color: 'orange', strokeWidth: 1 },
  ];

  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Bar Chart vertical avec seuils et export</h2>
        <BarChart
          data={sampleData}
          width={700}
          height={350}
          thresholds={thresholds}
        />

        <h2 style={{ marginTop: 40 }}>Bar Chart horizontal</h2>
        <BarChart
          data={sampleData}
          width={700}
          height={350}
          isHorizontal
          thresholds={thresholds}
        />
      </div>
    </>
  );
}

export default App;
