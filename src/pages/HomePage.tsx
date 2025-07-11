import React, { useState, useEffect } from 'react';
import ProgressLinear from '../components/ProgressLinear/ProgressLinear';
import Button from '../components/Button';
import ProgressCircular from '../components/ProgressCircular/ProgressCircular';
import Title from '../components/Title/Title';
import BarChart from '../components/BarChart/BarChart';

const HomePage = () => {
  const [progressLinear, setProgressLinear] = useState(0);
  const [progressCircular, setProgressCircular] = useState<number>(0);

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

  useEffect(() => {
    const interval = setInterval(() => {
      setProgressLinear(p => (p >= 100 ? 0 : p + 1));
    }, 50);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressCircular(p => (p >= 100 ? 0 : p + 1));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <div>
        <Button data-testid='button' onClick={() => alert('Button clicked!')}>
          Click Me!
        </Button>
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
        <ProgressLinear progress={progressCircular} showPercentage />

        <h3>2. Taille réduite (largeur & hauteur)</h3>
        <ProgressLinear
          progress={progressCircular}
          size={150}
          height={8}
          progressColor='#0099ff'
          showPercentage
        />
        <h3>3. Progression sans pourcentage affiché</h3>
        <ProgressLinear progress={progressCircular} showPercentage={false} />

        <h3>4. Couleurs personnalisées</h3>
        <ProgressLinear
          progress={progressCircular}
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

      <div
        style={{
          padding: 20,
          maxWidth: 400,
          gap: 16,
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        <h3>1. Progression circulaire dynamique </h3>
        <ProgressCircular progress={progressLinear} />

        <h3>2. Taille réduite</h3>
        <ProgressCircular
          progress={progressLinear}
          size={100}
          strokeWidth={6}
          percentageFontSize={20}
        />

        <h3>3. Sans pourcentage affiché</h3>
        <ProgressCircular progress={progressLinear} showPercentage={false} />

        <h3>4. Couleurs personnalisées</h3>
        <ProgressCircular
          progress={progressLinear}
          circleOneStroke='#222'
          circleTwoStroke='#ff9900'
        />

        <h3>5. Progression circulaire statique avec pourcentage définis</h3>
        <ProgressCircular progress={70} percentageFontSize={30} />
      </div>

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
};

export default HomePage;
