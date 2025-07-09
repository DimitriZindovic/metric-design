import React from 'react';
import Button from './components/Button';
import Title from './components/Title/Title';
import BarChart from './components/BarChart/BarChart';

function App() {
  const sampleData = [
    { label: 'Jan', value: 40, color: '#f44336' },
    { label: 'Feb', value: 80, color: '#ff9800' },
    { label: 'Mar', value: 65, color: '#2196f3' },
    { label: 'Apr', value: 90, color: '#4caf50' },
    { label: 'May', value: 55 },
  ];
  return (
    <>
      <div style={{ padding: 20 }}>
        <h2>Graphique à barres simple</h2>
        <BarChart data={sampleData} width={600} height={350} />
      </div>
    </>
  );
}

export default App;
