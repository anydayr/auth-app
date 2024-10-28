import { Container, Grid2 } from '@mui/material';

import { Input, InputType } from '../../../components/TextField';
import Button from '../../../components/Button';
import useCreatePlaceholders from './hooks/useCreatePlaceholders';

const CreatePlaceholder = () => {
  const { register, errors, onSubmit, handleSubmit, handleReset } = useCreatePlaceholders();

  return (
    <Container style={{ maxWidth: '600px' }}>
      <Grid2 container sx={{ p: '1rem' }}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <Grid2 container gap={2} sx={{ mb: '2rem' }}>
            <Grid2 size={12}>
              <Input
                label="Título"
                type={InputType.TEXT}
                name="title"
                register={register}
                errors={errors}
              />
            </Grid2>
            <Grid2 size={12}>
              <Input
                label="Descripción"
                type={InputType.TEXT}
                name="body"
                register={register}
                errors={errors}
              />
            </Grid2>
          </Grid2>
          <Grid2 container gap={2}>
            <Grid2 size={4}>
              <Button type="submit" variant="contained" color="primary" fullWidth>
                Crear
              </Button>
            </Grid2>
            <Grid2 size={4}>
              <Button
                type="button"
                variant="contained"
                color="secondary"
                fullWidth
                onClick={() => handleReset()}>
                Limpiar
              </Button>
            </Grid2>
          </Grid2>
        </form>
      </Grid2>
    </Container>
  );
};
export default CreatePlaceholder;
