import { useState } from 'react';
import { Post } from '../interfaces/placeholder-data';
import { CREATE_PLACEHOLDER } from '../services/create-placeholder';
import { SubmitHandler, useForm } from 'react-hook-form';
import CreateTypes from '../types/create';
import { yupResolver } from '@hookform/resolvers/yup';
import createPlaceholderScheme from '../utilities/create-scheme';
import { resetModal } from '../../../../redux/modal-slice';
import { useDispatch, useSelector } from 'react-redux';
import { AppStore } from '../../../../redux/store';
import { updateSnackbar } from '../../../../redux/snakcbar-slice';

const useCreatePlaceholders = () => {
  const userState = useSelector((store: AppStore) => store.user);
  const [response, setResponse] = useState<any>(null);
  const [errorCreate, setErrorCreate] = useState<string | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<CreateTypes>({
    resolver: yupResolver(createPlaceholderScheme),
    defaultValues: {
      title: '',
      body: ''
    }
  });

  const onSubmit: SubmitHandler<CreateTypes> = (data: CreateTypes) => {
    console.log(data);
    if (userState.rol !== 'admin') return;
    const newPlaceholder = { ...data, userId: userState.id };

    createPlaceholder(newPlaceholder);
  };

  const createPlaceholder = async (data: CreateTypes) => {
    setLoading(true);
    try {
      const result = await CREATE_PLACEHOLDER(data);
      setResponse(result.data);
      dispatch(
        updateSnackbar({
          open: true,
          text: 'Se ha creado un placeholder exitosamente',
          severity: 'success'
        })
      );
      dispatch(resetModal());
    } catch (err: any) {
      setErrorCreate(err.message || 'Failed to create placeholder');
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
  const handleReset = () => {
    reset();
  };

  return {
    handleReset,
    handleSubmit,
    onSubmit,
    errors,
    register,
    response,
    errorCreate,
    loading,
    createPlaceholder
  };
};

export default useCreatePlaceholders;
