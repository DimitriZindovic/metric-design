// src/ProgressTest.tsx
import React from 'react';
import ProgressCircular from './ProgressCircular';

const ProgressTest = () => (
  <div style={{ display: 'flex', gap: 24, background: '#fff', padding: 40 }}>
    <ProgressCircular progress={0} disableAnimation data-testid='progress-0' />
    <ProgressCircular
      progress={50}
      disableAnimation
      data-testid='progress-50'
    />
    <ProgressCircular
      progress={100}
      disableAnimation
      data-testid='progress-100'
    />
  </div>
);

export default ProgressTest;
