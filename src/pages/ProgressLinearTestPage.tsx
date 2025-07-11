import React from 'react';
import ProgressLinearTest from '../components/ProgressLinear/ProgressLinearTest';
import Title from '../components/Title/Title';

const ProgressLinearTestPage = () => {
  return (
    <div style={{ padding: 20 }}>
      <Title level={1}>Test du Progress Linear</Title>
      <Title level={2}>Différents états de progression</Title>
      <ProgressLinearTest />
    </div>
  );
};

export default ProgressLinearTestPage;
