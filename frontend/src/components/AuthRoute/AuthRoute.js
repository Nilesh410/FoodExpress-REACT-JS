import { Navigate, useLocation } from 'react-router-dom';
import { useAuth } from '../../hooks/useAuth';

export default function AuthRoute({ children }) {
  const location = useLocation();//to return url exactly find out that user on which page and check if user login or not 
  //if login only that time show checkout page
  const { user } = useAuth();//user is login or not
  return user ? (
    children
  ) : (
    //if user is not login then 
    <Navigate to={`/login?returnUrl=${location.pathname}`} replace />
  );
}
