import { Container, Grid2, Typography, useTheme } from '@mui/material';
import { Input, InputType } from '../../../components/TextField';
import Button from '../../../components/Button';
import useEditPlaceholders from './hooks/useEditPlaceholders';
import WarningIcon from '@mui/icons-material/Warning';
import useDeletePlaceholder from './hooks/useDeletePlaceholders';
const DeletePlaceholder = () => {
  const { handleDelete, handleCloseModal } = useDeletePlaceholder();
  const theme = useTheme();
  return (
    <Container style={{ maxWidth: '600px', textAlign: 'center' }}>
      <WarningIcon sx={{ fontSize: 100, color: theme.palette.error.main }} />
      <Typography variant="h6">¿Estas seguro que desea eliminar este registro?</Typography>
      <Typography variant="body1" sx={{ mb: 2 }}>
        Esta a punto de eliminar un registro de forma permanente.{' '}
      </Typography>
      <Grid2 container gap={2}>
        <Grid2 size={4}>
          <Button
            type="button"
            variant="contained"
            color="primary"
            fullWidth
            onClick={handleDelete}>
            Aceptar
          </Button>
        </Grid2>
        <Grid2 size={4}>
          <Button
            type="button"
            variant="contained"
            color="secondary"
            fullWidth
            onClick={() => handleCloseModal()}>
            Cancelar
          </Button>
        </Grid2>
      </Grid2>
    </Container>
  );
};
export default DeletePlaceholder;
