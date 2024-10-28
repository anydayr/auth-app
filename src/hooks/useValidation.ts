import { useTheme } from '@mui/material/styles';
import { FieldErrors } from 'react-hook-form';

const useFormValidation = (errors: FieldErrors, errorKey: string) => {
  const theme = useTheme();

  if (errors[errorKey]) {
    return {
      message: errors[errorKey].message,
      style: { color: theme.palette.error.main }
    };
  }

  return {
    message: '',
    style: {}
  };
};

export default useFormValidation;
