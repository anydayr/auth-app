import React, { useEffect } from 'react';
import { Alert, Snackbar } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../redux/store';
import { resetSnackbar } from '../redux/snakcbar-slice';

const AlertMessage: React.FC = () => {
  const dispatch = useDispatch();
  const snackbarState = useSelector((store: AppStore) => store.snackbar);

  useEffect(() => {
    let timer: NodeJS.Timeout;

    if (snackbarState.open) {
      // Cerrar el Snackbar automáticamente después de 1 segundo
      timer = setTimeout(() => {
        dispatch(resetSnackbar());
      }, 2500);
    }

    return () => {
      clearTimeout(timer); // Limpiar el timer en caso de que el componente se desmonte
    };
  }, [snackbarState.open, dispatch]);

  const handleClose = (event: React.SyntheticEvent | Event, reason?: string) => {
    if (reason === 'clickaway') {
      return;
    }

    dispatch(resetSnackbar());
  };

  return (
    <Snackbar open={snackbarState.open} onClose={handleClose}>
      <Alert
        onClose={handleClose}
        severity={snackbarState.severity ?? 'info'}
        sx={{ width: '100%' }}>
        {snackbarState.text ?? ''}
      </Alert>
    </Snackbar>
  );
};

export default AlertMessage;
