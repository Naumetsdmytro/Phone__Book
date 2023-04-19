import { NavLink } from 'react-router-dom';

import styles from './AuthNav.module.css';

export const AuthNav = () => {
  return (
    <div className={styles.container}>
      <NavLink to="/register" className={styles.navLink}>
        Register
      </NavLink>
      <NavLink to="/login" className={styles.navLink}>
        Log in
      </NavLink>
    </div>
  );
};
