import { SubmitHandler, useForm } from 'react-hook-form';
import loginValidationScheme from '../login-scheme';
import LoginTypes from '../types/login';
import { useDispatch } from 'react-redux';
import { yupResolver } from '@hookform/resolvers/yup';
import { useNavigate } from 'react-router-dom';
import { createUser } from '../../../redux/user-slice';
import { Roles } from '../../../models/roles';
import { PrivateRoutes } from '../../../models/routes';
import { capitalizeFirstLetter } from '../../../utilities/capitalize-first-letter';
import { INVALID_DATA } from '../../../constants/input-validations';

const credentials = [
  { username: 'admin', password: 'admin123', rol: Roles.ADMIN, id: 5, colorIcon: '#c34a36' },
  { username: 'user', password: 'user123', rol: Roles.USER, id: 2, colorIcon: '#845ec2' }
];

export default function useLoginForm() {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const {
    setError,
    register,
    handleSubmit,
    formState: { errors },
    trigger
  } = useForm<LoginTypes>({
    resolver: yupResolver(loginValidationScheme)
  });

  const onSubmit: SubmitHandler<LoginTypes> = (data: LoginTypes) => {
    const user = credentials.find((cred) => cred.username === data.user);
    const password = credentials.find((cred) => cred.password === data.password);
    if (!user && !password) {
      setError('user', { type: 'custom', message: INVALID_DATA });
      setError('password', { type: 'custom', message: INVALID_DATA });
      return;
    }
    if (user && password) {
      dispatch(
        createUser({
          user: capitalizeFirstLetter(user.username),
          rol: user.rol,
          id: user.id,
          color: user.colorIcon
        })
      );
      navigate(`/${PrivateRoutes.PRIVATE}`, { replace: true });
    }
  };

  return { register, handleSubmit, errors, onSubmit, trigger };
}
