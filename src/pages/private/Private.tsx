import { Navigate, Route } from 'react-router-dom';
import { PrivateRoutes } from '../../models/routes';
import RoutesNotFound from '../../utilities/routes-not-found';
import { lazy } from 'react';
import ListPlaceholder from './dashboard/List';
import HomeLayout from './dashboard/HomeLayout';
import ListLayout from './dashboard/ListLayout';
import ProfilePreviewInfo from './dashboard/ProfilePreviewInfo';

const Dashboard = lazy(() => import('./dashboard/Dashboard'));
const Home = lazy(() => import('./dashboard/Home')); // Asegúrate de que Home esté importado correctamente

function Private() {
  return (
    <RoutesNotFound>
      <Route path="/" element={<Navigate to={PrivateRoutes.DASHBOARD} />} />
      <Route path={PrivateRoutes.DASHBOARD} element={<Dashboard />}>
        <Route
          path={PrivateRoutes.HOME}
          element={
            <HomeLayout>
              <Home />
            </HomeLayout>
          }
        />
        <Route
          path={PrivateRoutes.LIST}
          element={
            <ListLayout>
              <ListPlaceholder />
            </ListLayout>
          }
        />
        <Route path={PrivateRoutes.PROFILE} element={<ProfilePreviewInfo />} />
      </Route>
    </RoutesNotFound>
  );
}

export default Private;
