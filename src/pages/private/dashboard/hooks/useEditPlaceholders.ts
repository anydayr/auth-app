import { SubmitHandler, useForm } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import EditTypes from '../types/edit';
import { useEffect, useState } from 'react';
import { EDIT_PLACEHOLDER } from '../services/edit-placeholder';
import { AppStore } from '../../../../redux/store';
import editPlaceholderScheme from '../utilities/edit-scheme';
import { updateSnackbar } from '../../../../redux/snakcbar-slice';
import { resetModal } from '../../../../redux/modal-slice';
import { GET_PLACEHOLDERS_BY_ID } from '../services/get-placeholders';

export default function useEditPlaceholder() {
  const tableState = useSelector((store: AppStore) => store.table);
  const userState = useSelector((store: AppStore) => store.user);

  const dispatch = useDispatch();
  const [response, setResponse] = useState<any>(null);
  const [errorEdit, setErrorEdit] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  console.log(tableState);
  const {
    setValue,
    register,
    handleSubmit,
    reset,
    formState: { errors },
    trigger
  } = useForm<EditTypes>({
    resolver: yupResolver(editPlaceholderScheme),
    defaultValues: {
      title: '',
      body: ''
    }
  });

  const getById = async () => {
    if (!tableState.rowSelected) return;
    try {
      const response = await GET_PLACEHOLDERS_BY_ID(tableState.rowSelected);
      const { title, body } = response.data;
      setValue('title', title, { shouldValidate: true });
      setValue('body', body, { shouldValidate: true });
    } catch (error) {
      console.error('Error fetching placeholder:', error);
    }
  };
  const editPlaceholder = async (data: EditTypes, id: number) => {
    setLoading(true);
    try {
      const result = await EDIT_PLACEHOLDER(data, id);
      setResponse(result.data);
      dispatch(
        updateSnackbar({
          open: true,
          text: 'Se ha editado un registro exitosamente',
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
  const onSubmit: SubmitHandler<EditTypes> = (data: EditTypes) => {
    const newPlaceholder = { ...data, userId: userState.id };
    editPlaceholder(newPlaceholder, tableState?.rowSelected);
  };

  const handleReset = () => {
    reset();
  };

  useEffect(() => {
    getById();
  }, [tableState.rowSelected]);

  return { register, handleSubmit, errors, onSubmit, trigger, editPlaceholder, handleReset };
}
