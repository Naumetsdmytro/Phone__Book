import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogedIn, selectIsRefreshing } from 'redux/auth/selectors';

export const PrivateRoute = ({ component, redirectTo = '/' }) => {
  const isLogedIn = useSelector(selectIsLogedIn);
  const isRefreshing = useSelector(selectIsRefreshing);
  const shouldRedirect = !isLogedIn && !isRefreshing;

  return shouldRedirect ? <Navigate to={redirectTo} /> : component;
};
