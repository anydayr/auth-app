import React from 'react';
import { Container, Paper, Grid2, Typography, useTheme } from '@mui/material';
import Button from '../../components/Button';
import Input, { InputType } from '../../components/TextField';
import useLoginForm from './hooks/useLoginForm';
import LogoApp from '../../assets/app-logo.png';
const Login: React.FC = () => {
  const { register, handleSubmit, errors, onSubmit } = useLoginForm();
  const theme = useTheme();
  return (
    <Container style={{ maxWidth: '600px' }}>
      <Paper elevation={3} sx={{ height: '400px', padding: '1.5rem' }}>
        <Grid2>
          <Grid2
            sx={{
              justifyContent: 'center',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
            }}>
            <img src={LogoApp} height={50} width={50} />
            <Typography
              variant="h5"
              fontWeight={'bolder'}
              color={theme.palette.primary.main}
              sx={{ mb: 3 }}>
              Placeholder App
            </Typography>
          </Grid2>

          <Grid2 container>
            <form onSubmit={handleSubmit(onSubmit)}>
              <Grid2 container gap={2}>
                <Grid2 size={12}>
                  <Input
                    label="Usuario"
                    type={InputType.TEXT}
                    name="user"
                    register={register}
                    errors={errors}
                  />
                </Grid2>
                <Grid2 size={12}>
                  <Input
                    label="Contraseña"
                    type={InputType.PASSWORD}
                    name="password"
                    register={register}
                    errors={errors}
                  />
                </Grid2>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth
                  onClick={() => {}}>
                  Iniciar sesion
                </Button>
              </Grid2>
            </form>
          </Grid2>
        </Grid2>
      </Paper>
    </Container>
  );
};

export default Login;
