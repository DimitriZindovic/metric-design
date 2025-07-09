import React from 'react';
import Button from './components/Button';
import Title from './components/Title/Title';

function App() {
  return (
    <div>
      <Title level={1}>Metric Design Library</Title>
      <Title level={2}>Composants disponibles</Title>
      <Title level={3}>Bouton interactif</Title>
      <Button onClick={() => alert('Button clicked!')}>Click Me!</Button>
    </div>
  );
}

export default App;
