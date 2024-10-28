import { Route, Routes } from 'react-router-dom';
import NotFoundPage from '../pages/NotFound';

interface Props {
  children: JSX.Element[] | JSX.Element;
}
function RoutesNotFound({ children }: Props) {
  return (
    <Routes>
      {children}
      <Route path="*" element={<NotFoundPage />} />
    </Routes>
  );
}

export default RoutesNotFound;
