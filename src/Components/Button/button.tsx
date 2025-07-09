import React from 'react';

type ButtonProps = {
    children: React.ReactNode;
    onClick?: () => void;
};

const Button: React.FC<ButtonProps> = ({ children, onClick }) => (
    <button
        style={{
            padding: '8px 16px',
            background: 'red',
            color: '#fff',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
        }}
        onClick={onClick}
    >
        {children}
    </button>
);

export default Button;