import { InputBaseProps, TextField, Typography } from '@mui/material';
import { FieldErrors, UseFormRegister, UseFormTrigger } from 'react-hook-form';
import useFormValidation from '../hooks/useValidation';

interface InputProps {
  register: UseFormRegister<any>;
  name: string;
  errors?: FieldErrors;
  label?: string;
  type: InputType;
  inputProps?: InputBaseProps['inputProps'];
  disabled?: boolean;
  trigger?: UseFormTrigger<any>;
}

export enum InputType {
  NUMBER = 'number',
  PASSWORD = 'password',
  SEARCH = 'search',
  TEXT = 'text',
  HIDDEN = 'hidden',
  CHECKBOX = 'checkbox'
}

export const Input = ({
  register,
  name,
  errors = {},
  label = '',
  type,
  inputProps,
  disabled = false,
  trigger
}: InputProps) => {
  const { message = null, style } = useFormValidation(errors, name);
  return (
    <div>
      <TextField
        disabled={disabled}
        type={type}
        error={errors && !!errors[name]}
        id={name}
        label={label}
        variant="outlined"
        {...register(name)}
        {...(inputProps && { inputProps: inputProps })}
        fullWidth
      />
      {message && (
        <Typography variant="caption" style={style}>
          {message ?? ''}
        </Typography>
      )}
    </div>
  );
};

export default Input;
