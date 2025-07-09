import React from 'react';

type TitleLevel = 1 | 2 | 3 | 4 | 5 | 6;

interface TitleProps extends React.HTMLAttributes<HTMLHeadingElement> {
  children: React.ReactNode;
  level?: TitleLevel;
}

const Title: React.FC<TitleProps> = ({ children, level = 1, ...rest }) => {
  return React.createElement(`h${level}`, rest, children);
};

export default Title;
