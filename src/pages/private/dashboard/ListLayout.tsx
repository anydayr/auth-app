import React, { ReactNode } from 'react';
import { Container } from '@mui/material';
import NavbarBreadcrumbs from './components/NavbarBreadcrumbs';

interface ListLayoutProps {
  children: ReactNode;
}

const ListLayout: React.FC<ListLayoutProps> = ({ children }) => {
  return (
    <Container>
      <NavbarBreadcrumbs module="Lista" page="Placeholders" />
      <Container maxWidth="lg" style={{ marginTop: '20px' }}>
        {children}
      </Container>
    </Container>
  );
};

export default ListLayout;
