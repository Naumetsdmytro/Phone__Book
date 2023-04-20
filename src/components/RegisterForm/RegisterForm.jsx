import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/operations';
import { selectErrorRegister } from 'redux/auth/selectors';

import styles from './RegisterForm.module.css';

export const RegisterForm = () => {
  const dispatch = useDispatch();
  const error = useSelector(selectErrorRegister);

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
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
          <span className={styles.inputText}>Name</span>
          <input type="text" name="name" className={styles.formInput} />
        </label>
        <label className={styles.inputTitle}>
          <span className={styles.inputText}>Email</span>

          <input type="email" name="email" className={styles.formInput} />
        </label>
        <label className={styles.inputTitle}>
          <span className={styles.inputText}>Password</span>
          <input type="password" name="password" className={styles.formInput} />
        </label>
        <button type="submit" className={styles.formBtn}>
          Register
        </button>
      </form>
      {error && <p>User with this email has already logged in!</p>}
    </>
  );
};
