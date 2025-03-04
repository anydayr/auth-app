import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

import { AppStore } from '../redux/store';
import { PrivateRoutes, PublicRoutes } from '../models/routes';

interface Props {
  privateValidation: boolean;
}

const PrivateValidationFragment = <Outlet />;
const PublicValidationFragment = <Navigate replace to={PrivateRoutes.PRIVATE} />;

export const AuthGuard = ({ privateValidation }: Props) => {
  const userState = useSelector((store: AppStore) => store.user);
  return userState.user ? (
    privateValidation ? (
      PrivateValidationFragment
    ) : (
      PublicValidationFragment
    )
  ) : (
    <Navigate replace to={PublicRoutes.LOGIN} />
  );
};

export default AuthGuard;
