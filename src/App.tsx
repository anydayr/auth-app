import { ThemeProvider } from '@mui/material/styles';
import { AppTheme } from './theme/theme';
import { BrowserRouter, Navigate, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/store';
import { PrivateRoutes, PublicRoutes } from './models/routes';

import RoutesNotFound from './utilities/routes-not-found';
import { AuthGuard } from './guards/auth.guard';

import { lazy, Suspense } from 'react';
import AuthLayout from './pages/auth/AuthLayout';
import ModalGroup from './components/DialogGroup';
import AlertMessage from './components/Alert';

function App() {
  const Login = lazy(() => import('./pages/auth/Login'));
  const Private = lazy(() => import('./pages/private/Private'));

  return (
    <div className="App">
      <Suspense fallback={<>Cargando</>}>
        <ThemeProvider theme={AppTheme}>
          <Provider store={store}>
            <BrowserRouter>
              <RoutesNotFound>
                <Route path="/" element={<Navigate to={PrivateRoutes.PRIVATE} />} />
                <Route
                  path={PublicRoutes.LOGIN}
                  element={
                    <AuthLayout>
                      <Login />
                    </AuthLayout>
                  }
                />
                <Route element={<AuthGuard privateValidation={true} />}>
                  <Route path={`${PrivateRoutes.PRIVATE}/*`} element={<Private />} />
                </Route>
              </RoutesNotFound>
            </BrowserRouter>
            <ModalGroup />
            <AlertMessage />
          </Provider>
        </ThemeProvider>
      </Suspense>
    </div>
  );
}

export default App;
