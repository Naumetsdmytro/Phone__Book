import { useEffect, lazy } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Routes, Route } from 'react-router-dom';

import { SaredLayout } from './SharedLayout';
import { RestrictedRoute } from './RestrictedRoute';
import { PrivateRoute } from './PrivateRoute';
import { refreshUser } from 'redux/auth/operations';
import { selectIsRefreshing } from 'redux/auth/selectors';

const Home = lazy(() => import('./pages/Home'));
const Login = lazy(() => import('./pages/Login'));
const Register = lazy(() => import('./pages/Register'));
const Contacts = lazy(() => import('./pages/Contacts'));

export const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return isRefreshing ? (
    <h2>Refreshing User...</h2>
  ) : (
    <Routes>
      <Route path="/" element={<SaredLayout />}>
        <Route index element={<Home />} />
        <Route
          path="/login"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Login />} />
          }
        />
        <Route
          path="/register"
          element={
            <RestrictedRoute redirectTo="/contacts" component={<Register />} />
          }
        />
        <Route
          path="/contacts"
          element={
            <PrivateRoute component={<Contacts />} redirectTo="/login" />
          }
        />
      </Route>
    </Routes>
  );
};

/* <div className={style.container}>
<div className={style.phoneContainer}>
  <ContactForm />
  <FilterContactForm />
  {isNeedToShow && <Loader />}
  {error && <h2>Sorry, something went wrong ):</h2>}
  {!isNeedToShow && <ContactList />}
</div>
</div> */
