import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from 'redux/auth/selectors';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLogedIn = useSelector(selectIsLogedIn);
  const shouldRedirect = !isLogedIn;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
