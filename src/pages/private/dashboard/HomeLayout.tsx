import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import NavbarBreadcrumbs from './components/NavbarBreadcrumbs';

interface HomeLayoutProps {
  children: ReactNode;
}

const HomeLayout: React.FC<HomeLayoutProps> = ({ children }) => {
  return (
    <Container>
      <NavbarBreadcrumbs module="Dashboard" page="Home" />
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        {children} {/* Renderiza los hijos aquí */}
      </Container>
    </Container>
  );
};

export default HomeLayout;
