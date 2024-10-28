import { Container, Typography, useTheme } from '@mui/material';
import { AppStore } from '../../../redux/store';
import { useSelector } from 'react-redux';
import HomeImage from '../../../assets/home.svg';
const Home = () => {
  const theme = useTheme();

  const userState = useSelector((store: AppStore) => store.user);
  return (
    <Container maxWidth="lg" sx={{ height: '100%', width: '100%' }}>
      <Typography variant="h4" align="center" gutterBottom color={theme.palette.secondary.main}>
        {`¡Bienvenido al Dashboard ${userState.user}!`}
      </Typography>
      <Typography variant="h6" align="center">
        Esperamos que disfrutes tu experiencia
      </Typography>
      <img src={HomeImage} height={'400px'} loading="lazy" />
    </Container>
  );
};
export default Home;
