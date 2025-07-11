import React from 'react';

type TitleProps = {
  children: React.ReactNode;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
} & React.HTMLAttributes<HTMLHeadingElement>;

const Title: React.FC<TitleProps> = ({ children, level = 1, ...rest }) => {
  switch (level) {
    case 2:
      return <h2 {...rest}>{children}</h2>;
    case 3:
      return <h3 {...rest}>{children}</h3>;
    case 4:
      return <h4 {...rest}>{children}</h4>;
    case 5:
      return <h5 {...rest}>{children}</h5>;
    case 6:
      return <h6 {...rest}>{children}</h6>;
    case 1:
    default:
      return <h1 {...rest}>{children}</h1>;
  }
};

export default Title;
