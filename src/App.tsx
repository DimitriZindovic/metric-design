import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import ProgressCircular from './components/ProgressCircular/ProgressCircular';

function App() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => (p >= 100 ? 0 : p + 1));
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Button onClick={() => alert('Button clicked!')}>Click Me!</Button>

      <h3>1. Progression circulaire dynamique </h3>
      <ProgressCircular progress={progress} />

      <h3>2. Taille réduite</h3>
      <ProgressCircular
        progress={progress}
        size={100}
        strokeWidth={6}
        percentageFontSize={20}
      />

      <h3>3. Sans pourcentage affiché</h3>
      <ProgressCircular progress={progress} showPercentage={false} />

      <h3>4. Couleurs personnalisées</h3>
      <ProgressCircular
        progress={progress}
        circleOneStroke='#222'
        circleTwoStroke='#ff9900'
      />

      <h3>5. Progression circulaire statique avec pourcentage définis</h3>
      <ProgressCircular progress={70} percentageFontSize={30} />
    </>
  );
}

export default App;
