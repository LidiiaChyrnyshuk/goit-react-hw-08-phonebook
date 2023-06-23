import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authOperations';
import css from './LoginForm.module.css';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
      // .unwrap()
      // .then(() => {
      //   toast.success('Welcome');
      // })
      // .catch(() => {
      //   toast.error('Error Login');
      // })
    );
    form.reset();
  };

  return (
    <div>
      <form
        onSubmit={handleSubmit}
        autoComplete="off"
        className={css.loginForm}
      >
        <label className={css.loginLabel}>
          Email
          <input
            className={css.loginInput}
            type="email"
            name="email"
            pattern="^((([0-9A-Za-z]{1}[-0-9A-z\.]{0,30}[0-9A-Za-z]?)|([0-9А-Яа-я]{1}[-0-9А-я\.]{0,30}[0-9А-Яа-я]?))@([-A-Za-z]{1,}\.){1,}[-A-Za-z]{2,})$"
          />
        </label>
        <label className={css.loginLabel}>
          Password
          <input
            className={css.loginInput}
            type="password"
            name="password"
            pattern="^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$"
          />
        </label>
        <button type="submit" className={css.btnLogin}>
          Log In
        </button>
      </form>
    </div>
  );
};
