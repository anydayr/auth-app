import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { AppStore } from '../../../../redux/store';
import { updateSnackbar } from '../../../../redux/snakcbar-slice';
import { resetModal } from '../../../../redux/modal-slice';
import { DELETE_APPOINTMENT_BY_ID } from '../services/delete-placeholder';

export default function useDeletePlaceholder() {
  const tableState = useSelector((store: AppStore) => store.table);
  const userState = useSelector((store: AppStore) => store.user);

  const dispatch = useDispatch();
  const [response, setResponse] = useState<any>(null);
  const [errorDelete, setErrorEdit] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const handleCloseModal = () => {
    dispatch(resetModal());
  };
  const deletePlaceholder = async (id: number) => {
    setLoading(true);
    try {
      const result = await DELETE_APPOINTMENT_BY_ID(id);
      setResponse(result.data);
      dispatch(
        updateSnackbar({
          open: true,
          text: 'Se ha eliminado un registro exitosamente',
          severity: 'success'
        })
      );
      dispatch(resetModal());
    } catch (err: any) {
      setErrorEdit(err.message || 'Failed to create placeholder');
      dispatch(
        updateSnackbar({
          open: true,
          text: 'Ha ocurrido un error',
          severity: 'error'
        })
      );
    } finally {
      setLoading(false);
    }
  };
  const handleDelete = useCallback(() => {
    deletePlaceholder(Number(tableState.rowSelected));
  }, []);
  return { deletePlaceholder, handleDelete, handleCloseModal };
}
