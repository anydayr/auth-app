import { alpha } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Stack from '@mui/material/Stack';
import AppNavbar from './components/AppNavbar';
import Header from './components/Header';

import SideMenu from './components/SideMenu';
import { Outlet } from 'react-router-dom';

export default function Dashboard(props: { disableCustomTheme?: boolean }) {
  return (
    <>
      <CssBaseline enableColorScheme />
      <Box sx={{ display: 'flex' }}>
        <SideMenu />
        <AppNavbar />
        <Box
          component="main"
          sx={(theme) => ({
            flexGrow: 1,
            backgroundColor: '#EEEEEE',
            overflow: 'auto',
            height: '100vh'
          })}>
          <Stack
            spacing={2}
            sx={{
              alignItems: 'center',
              px: 3,
              pb: 5,
              mt: { xs: 8, md: 0 }
            }}>
            <Header />
            <Outlet />
          </Stack>
        </Box>
      </Box>
    </>
  );
}
