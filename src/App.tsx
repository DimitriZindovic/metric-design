import React, { useState, useEffect } from 'react';
import ProgressLinear from './components/ProgressLinear/ProgressLinear';
import Button from './components/Button';
import Title from './components/Title/Title';

const App = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div>
        <Button onClick={() => alert('Button clicked!')}>Click Me!</Button>
        <Title level={3} data-testid='title-h3'>
          Bouton interactif
        </Title>
        <Title level={2} data-testid='title-h2'>
          Composants disponibles
        </Title>
        <Title level={1} data-testid='title-h1'>
          Metric Design Library
        </Title>
      </div>
      <div
        style={{
          padding: 20,
          maxWidth: 400,
          gap: 16,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3>1. Barre normale (progression dynamique)</h3>
        <ProgressLinear progress={progress} showPercentage />

        <h3>2. Taille réduite (largeur & hauteur)</h3>
        <ProgressLinear
          progress={progress}
          size={150}
          height={8}
          progressColor='#0099ff'
          showPercentage
        />
        <h3>3. Progression sans pourcentage affiché</h3>
        <ProgressLinear progress={progress} showPercentage={false} />

        <h3>4. Couleurs personnalisées</h3>
        <ProgressLinear
          progress={progress}
          backgroundColor='#222'
          progressColor='#ff9900'
          showPercentage
          height={20}
        />

        <h3>5. Animation indéterminée</h3>
        <ProgressLinear progress={0} animated size='100%' height={15} />

        <h3>6. Barre statique avec pourcentage définis</h3>
        <ProgressLinear progress={70} showPercentage />
      </div>
    </>

  );
};

export default App;
