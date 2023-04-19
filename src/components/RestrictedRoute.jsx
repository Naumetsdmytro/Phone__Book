import { Navigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectIsLogedIn } from 'redux/auth/selectors';

export const RestrictedRoute = ({ component, redirectTo = '/' }) => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return isLogedIn ? <Navigate to={redirectTo} /> : component;
};
