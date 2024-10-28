import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Drawer, { drawerClasses } from '@mui/material/Drawer';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';

import MenuButton from './MenuButton';
import MenuContent from './MenuContent';
import { useTheme } from '@emotion/react';
import AccountMenu from './AccountMenu';
import { useCallback } from 'react';
import { useDispatch } from 'react-redux';
import { resetUser } from '../../../../redux/user-slice';

interface SideMenuMobileProps {
  open: boolean | undefined;
  toggleDrawer: (newOpen: boolean) => () => void;
}

export default function SideMenuMobile({ open, toggleDrawer }: SideMenuMobileProps) {
  const dispatch = useDispatch();
  const theme = useTheme();
  const handleLogout = useCallback(() => {
    dispatch(resetUser());
  }, []);
  return (
    <Drawer
      anchor="right"
      open={open}
      onClose={toggleDrawer(false)}
      sx={{
        zIndex: (theme) => theme.zIndex.drawer + 1,
        [`& .${drawerClasses.paper}`]: {
          backgroundImage: 'none',
          backgroundColor: theme.palette.secondary.main
        }
      }}>
      <Stack
        sx={{
          minWidth: '350px',
          height: '100%'
        }}>
        <Stack direction="row" sx={{ p: 2, pb: 0, gap: 1 }}>
          <Stack direction="row" sx={{ gap: 1, alignItems: 'center', flexGrow: 1, p: 1 }}>
            <AccountMenu />
          </Stack>
          <MenuButton showBadge>
            <NotificationsRoundedIcon />
          </MenuButton>
        </Stack>
        <Divider />
        <Stack sx={{ flexGrow: 1 }}>
          <MenuContent />
          <Divider />
        </Stack>

        <Stack sx={{ p: 2 }}>
          <Button
            variant="contained"
            fullWidth
            startIcon={<LogoutRoundedIcon />}
            onClick={handleLogout}>
            Cerrar sesión
          </Button>
        </Stack>
      </Stack>
    </Drawer>
  );
}
