import { useForm } from 'react-hook-form';
import { useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import styles from '../Styles/SignUp.module.scss';
import RequestSrvice from '../api/RequestService';


const SignUp = () => {

  const {
    register,
    formState: {
      errors,
      isValid
    },
    handleSubmit,
    reset,
    watch
  } = useForm({
    mode: 'onBlur'
  });

  const navigate = useNavigate();

  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      navigate('/home');
    }
  });

  const onFormSubmit = async (formData) => {
    const response = await RequestSrvice.registration(formData);
    const data = await response.json();
    localStorage.setItem('user', JSON.stringify(data))
    if (data) {
      navigate('/home');
    }
    reset();

  };

  const password = useRef({});
  password.current = watch('password', '');

  return (
    <div>
      <div className={styles.auth_form_container}>
        <h1>Registration</h1>
        <form className={styles.auth_form} onSubmit={handleSubmit(onFormSubmit)}>

          <label htmlFor="login">Login</label>
          <input placeholder='Enter Login...'
            {...register('login', {
              required: "Field \"Login\" must be filled",
              minLength: {
                value: 6,
                message: 'Field must have 6 or more symbols'
              }
            })}
          />
          <div className={styles.input_err}>{errors?.login && <p className={styles.input_err_p}>{errors?.login?.message || 'Error!'}</p>}</div>

          <label htmlFor="password">Password</label>
          <input autoComplete='off' type="password" placeholder='Enter Password...'
            {...register('password', {
              required: "Field \"Password\" must be filled",
              minLength: {
                value: 6,
                message: 'Field must have 6 or more symbols(letters and numbers)'
              },
              pattern: {
                value: /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/,
                message: 'Field must have at least 1 letter or number'
              }
            })}
          />
          <div className={styles.input_err}>{errors?.password && <p className={styles.input_err_p}>{errors?.password?.message || 'Error!'}</p>}</div>

          <label htmlFor="confirm password">Confirm Password</label>
          <input autoComplete="off" type="password" placeholder='Confirm Password...'
            {...register('confirmPassword', {
              required: true,
              minLength: {
                value: 6,
              },
              validate: value =>
                value === password.current || "The passwords do not match!!!"
            })}
          />
          <div className={styles.input_err}>{errors?.confirmPassword && <p className={styles.input_err_p}>{errors?.confirmPassword?.message || 'The passwords do not match!!!'}</p>}</div>

          <label htmlFor="email">Email</label>
          <input placeholder='Enter Email...'
            {...register('email', {
              required: "Field \"Email\" must be filled",
              pattern: {
                // value: /.+@.+\..+/i,
                value: /([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{2,6}$/,
                message: "Enter correct email address"
              }
            })}
          />
          <div className={styles.input_err}>{errors?.email && <p className={styles.input_err_p}>{errors?.email?.message || 'Error!'}</p>}</div>

          <label htmlFor="name">Name</label>
          <input placeholder='Enter Your Name...'
            {...register('name', {
              required: "Field \"Name\" must be filled",
              minLength: {
                value: 2,
                message: 'Field must have 2 or more symbols(only letters)'
              },
              pattern: {
                value: /[a-zA-Z]{2,}/,
                message: "Name must have only letters"
              }
            })}
          />
          <div style={{ height: "40px" }}>{errors?.name && <p className={styles.input_err_p}>{errors?.name?.message || 'Error!'}</p>}</div>

          <button type='submit' disabled={!isValid} className={styles.reg_button}>Sign Up</button>
        </form>
      </div>
    </div>
  )
}

export default SignUp;