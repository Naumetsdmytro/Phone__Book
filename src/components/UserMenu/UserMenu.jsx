import { useDispatch, useSelector } from 'react-redux';
import { logout } from 'redux/auth/operations';
import { selectUserName } from 'redux/auth/selectors';

import styles from './UserMenu.module.css';

export const UserMenu = () => {
  const name = useSelector(selectUserName);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(logout());
  };
  return (
    <div className={styles.container}>
      <p className={styles.userName}>Welcome, {name}</p>
      <button onClick={handleClick} className={styles.buttonLogOut}>
        Log Out
      </button>
    </div>
  );
};
