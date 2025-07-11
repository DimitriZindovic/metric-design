// src/ProgressLinearTest.tsx
import React from 'react';
import ProgressLinear from './ProgressLinear';

const ProgressLinearTest = () => (
  <div style={{ display: 'flex', gap: 24, background: '#fff', padding: 40 }}>
    <ProgressLinear
      progress={0}
      disableAnimation
      data-testid='linear-progress-0'
    />
    <ProgressLinear
      progress={50}
      disableAnimation
      data-testid='linear-progress-50'
    />
    <ProgressLinear
      progress={100}
      disableAnimation
      data-testid='linear-progress-100'
    />
  </div>
);

export default ProgressLinearTest;
