import { ButtonProps as ButtonPropsMUI, Button } from '@mui/material';

interface ButtonProps extends ButtonPropsMUI {
  label: string;
  onClick: () => void;
}

export const ButtonCustom = ({ label = '', onClick }: ButtonProps) => {
  return <Button onClick={onClick}>{label}</Button>;
};

export default ButtonCustom;
