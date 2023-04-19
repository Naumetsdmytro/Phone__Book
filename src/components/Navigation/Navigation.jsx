import { useSelector } from 'react-redux';
import { NavLink } from 'react-router-dom';

import { selectIsLogedIn } from 'redux/auth/selectors';
import styles from './Navigation.module.css';

export const Navigation = () => {
  const isLogedIn = useSelector(selectIsLogedIn);
  return (
    <nav>
      <NavLink className={styles.navLink} to="/">
        Home
      </NavLink>
      {isLogedIn && (
        <NavLink className={styles.navLink} to="/contacts">
          Contacts
        </NavLink>
      )}
    </nav>
  );
};
