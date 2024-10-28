import React from 'react';
import { Button as MUIButton, ButtonProps as ButtonPropsMUI } from '@mui/material';

interface ButtonProps extends ButtonPropsMUI {
  onClick?: () => void;
  children: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, ...props }) => {
  return (
    <MUIButton onClick={onClick} {...props}>
      {children}
    </MUIButton>
  );
};

export default Button;
