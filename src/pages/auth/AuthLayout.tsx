import React from 'react';
import { Grid2 } from '@mui/material';
import LoginImage from '../../assets/login-layout.jpg';

interface LayoutProps {
  children: React.ReactNode;
}

const AuthLayout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Grid2 container style={{ height: '100vh', width: '100wv' }}>
      <Grid2
        size={6}
        style={{
          height: '100%',
          background: '#845ec2',
          display: 'flex',
          justifyContent: 'start'
        }}>
        <img
          loading="lazy"
          src={LoginImage}
          alt="Login"
          style={{
            width: '80%',
            height: '100%',
            objectFit: 'cover'
          }}
        />
      </Grid2>
      <Grid2 size={6} style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
        {children}
      </Grid2>
    </Grid2>
  );
};

export default AuthLayout;
