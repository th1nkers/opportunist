import React from 'react';
import styles from '../Login/Login.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import useInput from '../../../hooks/use-input'

const Signup = () => {

  const validadminIDValue = value => value.trim() !== '';
  const validPasswordValue = value => value.trim().length >= 6;

  const {
    value: adminID,
    valueChangeHandler: adminIDChangeHandler,
    inputBlurHandler: adminIDBlurHandler,
    hasError: adminIDError,
    isValid: adminIDIsValid,
  } = useInput(validadminIDValue);

  const {
    value: password,
    valueChangeHandler: passwordChangeHandler,
    inputBlurHandler: passwordBlurHandler,
    hasError: passwordError,
    isValid: passwordIsValid
  } = useInput(validPasswordValue);

  const submitHandler = e => {
    e.preventDefault();
    if (!adminIDIsValid && !passwordIsValid) return;


        

  }


  const stylesAdminIDInvalid = adminIDError ? `mb-3 ${styles.invalid}` : 'mb-2'
  const stylesPasswordInvalid = passwordError ? `mb-3 ${styles.invalid}` : 'mb-2'

  return (
    <div className={styles.loginBody}>
      <form className={styles.form} onSubmit={submitHandler}>

        <div className={stylesAdminIDInvalid}>
          <input
            type="text"
            className={styles.input}
            id="adminID"
            value={adminID}
            onBlur={adminIDBlurHandler}
            onChange={adminIDChangeHandler}
            placeholder="Admin ID"/>
          {adminIDError}
        </div>

        <div className={stylesPasswordInvalid}>
          <input
            type="password"
            className={styles.input}
            value={password}
            id="password"
            onChange={passwordChangeHandler}
            onBlur={passwordBlurHandler}
            placeholder="Password" />
          {passwordError}
        </div>

        <button
          type="submit"
          className={"btn btn-outline-dark " + styles.buttonSubmit}>
          <FontAwesomeIcon icon={faLock} />
          Signup
        </button>

      </form>
    </div>
  )
}

export default Signup