import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => {
  return (
    <nav
      style={{
        padding: 20,
        backgroundColor: '#f5f5f5',
        borderBottom: '1px solid #ddd',
        marginBottom: 20,
      }}
    >
      <div style={{ display: 'flex', gap: 20 }}>
        <Link
          to='/'
          style={{
            textDecoration: 'none',
            color: '#0066cc',
            fontWeight: 'bold',
          }}
        >
          Accueil
        </Link>
        <Link
          to='/progress-circular-test'
          style={{
            textDecoration: 'none',
            color: '#0066cc',
            fontWeight: 'bold',
          }}
        >
          Test Progress Circular
        </Link>
        <Link
          to='/progress-linear-test'
          style={{
            textDecoration: 'none',
            color: '#0066cc',
            fontWeight: 'bold',
          }}
        >
          Test Progress Linear
        </Link>
      </div>
    </nav>
  );
};

export default Navigation;
