import * as Yup from 'yup';
import { REQUIRED_VALIDATION_MESSAGE } from '../../../../constants/input-validations';

const editPlaceholderScheme = Yup.object().shape({
  title: Yup.string().required(REQUIRED_VALIDATION_MESSAGE),
  body: Yup.string().required(REQUIRED_VALIDATION_MESSAGE)
});

export default editPlaceholderScheme;
