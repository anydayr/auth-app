import * as Yup from 'yup';
import {
  MIN_CHARACTERS_VALIDATION_PASSWORD,
  REQUIRED_VALIDATION_MESSAGE
} from '../../constants/input-validations';

const PASSWORD_MIN_CHARACTERS = 6;

const loginValidationScheme = Yup.object().shape({
  user: Yup.string().required(REQUIRED_VALIDATION_MESSAGE),
  password: Yup.string()
    .required(REQUIRED_VALIDATION_MESSAGE)
    .min(
      PASSWORD_MIN_CHARACTERS,
      `${MIN_CHARACTERS_VALIDATION_PASSWORD} ${PASSWORD_MIN_CHARACTERS} caracteres `
    )
});

export default loginValidationScheme;
