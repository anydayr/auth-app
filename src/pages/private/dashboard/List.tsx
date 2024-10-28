import { Button, Container, Grid2, Skeleton, Typography, useTheme } from '@mui/material';
import CustomizedDataGrid from './components/DataGrid';
import useGetPlaceholders from './hooks/useGetPlaceholders';
import { columnUser, columnsAdmin } from './components/Columns';
import { AppStore } from '../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useMemo } from 'react';
import { updateModalType } from '../../../redux/modal-slice';

const ListPlaceholder = () => {
  const dispatch = useDispatch();
  const theme = useTheme();
  const { response: rows, loading } = useGetPlaceholders();
  const userState = useSelector((store: AppStore) => store.user);
  const columns = useMemo(() => {
    return userState.rol === 'user' ? columnUser : columnsAdmin;
  }, [userState.role]);
  return (
    <Grid2 container sx={{ width: '100%', height: '100%' }}>
      <Grid2 size={12}>
        <Typography variant="h4" align="center" gutterBottom color={theme.palette.primary.main}>
          Lista de placheholder 📒
        </Typography>
      </Grid2>
      {userState.rol !== 'user' && (
        <Container sx={{ display: 'flex', justifyContent: 'flex-end', padding: '16px' }}>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            onClick={() => {
              dispatch(updateModalType({ content: 'create-placeholders' }));
            }}
            sx={{ width: 'auto' }}>
            Crear Placeholder
          </Button>
        </Container>
      )}

      <Grid2 size={12}>
        {loading ? (
          <div>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
          </div>
        ) : (
          <CustomizedDataGrid rows={rows} columns={columns} actions={() => 'acciones'} />
        )}
      </Grid2>
    </Grid2>
  );
};

export default ListPlaceholder;
