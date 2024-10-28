import { Container, Typography, useTheme, Grid2 } from '@mui/material';
import { AppStore } from '../../../redux/store';
import { useSelector } from 'react-redux';
import Button from '../../../components/Button';
import Perfil from '../../../assets/profile.svg';
const ProfilePreviewInfo = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const theme = useTheme();

  return (
    <Container style={{ maxWidth: '600px', marginTop: '20px' }}>
      <Typography variant="h4" align="center" gutterBottom color={theme.palette.primary.main}>
        Perfil
      </Typography>
      <Grid2 container spacing={2}>
        <Grid2 size={6}>
          <Typography variant="caption">Nombre de usuario:</Typography>
          <Typography variant="body1">{userState.user}</Typography>
        </Grid2>
        <Grid2 size={6}>
          <Typography variant="caption">Contraseña:</Typography>
          <Typography variant="body1">*******</Typography>
        </Grid2>
      </Grid2>
      <img src={Perfil} alt="" height={'300px'} loading="lazy" />
    </Container>
  );
};

export default ProfilePreviewInfo;
