import { useState } from 'react';
import validation from '../Validation/Validation';
import style from './Form.module.css';

const Form = ({ login }) => {
  const [errors, setErrors] = useState({});
  const [userData, setUserData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (event) => {
    setUserData({
      ...userData,
      [event.target.name]: event.target.value,
    });

    setErrors(
      validation({
        ...userData,
        [event.target.name]: event.target.value,
      })
    );
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <div className={style.formContainer}>
      <form onSubmit={handleSubmit} className={style.form}>
        <label htmlFor='email' className={style.label}>
          Email:{' '}
        </label>
        <input
          className={style.input}
          type='text'
          name='email'
          placeholder='E-MAIL'
          value={userData.email}
          onChange={handleChange}></input>
        {errors.email && <p style={{ color: 'red' }}>{errors.email}</p>}
        <label htmlFor='password' className={style.label}>
          Password:{' '}
        </label>
        <input
          className={style.input}
          type='password'
          placeholder='Password'
          name='password'
          value={userData.password}
          onChange={handleChange}></input>
        {errors.password && <p style={{ color: 'red' }}>{errors.password}</p>}

        <button className={style.button}>Submit</button>
      </form>
    </div>
  );
};

export default Form;
