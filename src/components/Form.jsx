import React, { useState } from 'react';
import styles from './Form.module.css';
import { validate } from './validation';

const Form = ({ login }) => {
  const [userData, setUserData] = useState({ email: '', password: '' });
  const [errors, setErrors] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserData((prevUserData) => ({ ...prevUserData, [name]: value }));
    setErrors(validate({ ...userData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    login(userData);
  };

  return (
    <>
      <form className={styles.form} onSubmit={handleSubmit}>
        <label className={styles.label} htmlFor="email">
          <input
            className={styles.input}
            type="email"
            id="email"
            name="email"
            value={userData.email}
            onChange={handleChange}
            autoComplete="on"
            placeholder="User"
          />
        </label>
        {errors.email && <div className={styles.error}>{errors.email}</div>}
        <br />
        <label className={styles.label} htmlFor="password">
          <input
            className={styles.input}
            type="password"
            id="password"
            name="password"
            value={userData.password}
            onChange={handleChange}
            autoComplete="on"
            placeholder="Password"
          />
        </label>
        {errors.password && <div className={styles.error}>{errors.password}</div>}
        <br />
        <button className={styles.button} type="submit">Enviar</button>
      </form>
      <img src="./morty.gif" alt="Morty GIF" className={styles.gif} />
      <div className={styles.loginInfo}>
        <p className={styles.loginText}>Usuario: hola@example.com</p>
        <p className={styles.loginText}>Contraseña: tu-contraseña</p>
      </div>
    </>
  );
};

export default Form;
