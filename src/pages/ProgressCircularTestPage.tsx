import React from 'react';
import ProgressCircularTest from '../components/ProgressCircular/ProgressCircularTest';
import Title from '../components/Title/Title';

const ProgressCircularTestPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Title level={1}>Test du Progress Circular</Title>
      <Title level={2}>Différents états de progression</Title>
      <ProgressCircularTest />
    </div>
  );
};

export default ProgressCircularTestPage;
