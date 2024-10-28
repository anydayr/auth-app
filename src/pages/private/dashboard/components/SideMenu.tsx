import { styled, useTheme } from '@mui/material/styles';
import MuiDrawer, { drawerClasses } from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import Stack from '@mui/material/Stack';
import MenuContent from './MenuContent';
import AccountMenu from './AccountMenu';

const drawerWidth = 240;

const Drawer = styled(MuiDrawer)({
  width: drawerWidth,
  flexShrink: 0,
  boxSizing: 'border-box',
  mt: 10,
  [`& .${drawerClasses.paper}`]: {
    width: drawerWidth,
    boxSizing: 'border-box'
  }
});

export default function SideMenu() {
  const theme = useTheme();
  return (
    <Drawer
      variant="permanent"
      sx={{
        display: { xs: 'none', md: 'block' },
        [`& .${drawerClasses.paper}`]: {
          backgroundColor: theme.palette.secondary.main
        }
      }}>
      <Stack sx={{ flexGrow: 1 }}>
        <MenuContent />
        <Divider />
        <AccountMenu />
      </Stack>
    </Drawer>
  );
}
