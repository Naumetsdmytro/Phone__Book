import { useSelector } from 'react-redux';
import { selectIsLogedIn } from 'redux/auth/selectors';

import { AuthNav } from 'components/AuthNav';
import { UserMenu } from 'components/UserMenu';
import { Navigation } from 'components/Navigation';

import styles from './AppBar.module.css';

export const AppBar = () => {
  const isLoggedIn = useSelector(selectIsLogedIn);
  return (
    <header className={styles.header}>
      <Navigation />
      {isLoggedIn ? <UserMenu /> : <AuthNav />}
    </header>
  );
};
