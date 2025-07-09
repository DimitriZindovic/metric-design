import React, { useEffect, useState } from 'react';
import Button from './components/Button';
import ProgressCircular from './components/ProgressCircular/ProgressCircular';

function App() {
  const [progress, setProgress] = useState<number>(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress(p => {
        if (p >= 100) {
          clearInterval(timer);
          return 100;
        }
        return p + 1;
      });
    }, 50);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <Button onClick={() => alert('Button clicked!')}>Click Me!</Button>
      <ProgressCircular
        progress={progress}
        size={150}
        strokeWidth={12}
        circleOneStroke='#ddd'
        circleTwoStroke='#4caf50'
        percentageFontSize={40}
      />
    </>
  );
}

export default App;
