import { useDispatch, useSelector } from 'react-redux';
import { login } from 'redux/auth/operations';
import { selectErrorLogIn } from 'redux/auth/selectors';

import styles from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorLogIn);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      login({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };
  return (
    <>
      <form onSubmit={handleSubmit} className={styles.contactForm}>
        <label className={styles.inputTitle}>
          <span className={styles.inputText}>Email</span>
          <input type="email" name="email" className={styles.formInput} />
        </label>
        <label className={styles.inputTitle}>
          <span className={styles.inputText}>Password</span>
          <input type="password" name="password" className={styles.formInput} />
        </label>
        <button type="submit" className={styles.formBtn}>
          Log in
        </button>
      </form>
      {error && (
        <p className={styles.errorMessage}>
          Your email or password is not correct! Please, try again.
        </p>
      )}
    </>
  );
};
