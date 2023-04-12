import React,{useState} from 'react';
import styles from './Login.module.css';
import useInput from '../../../hooks/use-input'
import { useRef } from 'react';
import { signInWithEmailAndPassword, updateProfile} from 'firebase/auth';
import {auth} from '../../../helpers/firebaseConfig';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const validadminIDValue = value => value.trim() !== '';
  const validPasswordValue = value => value.trim().length >= 6;

  const adminIDRef = useRef();
  const passwordRef = useRef();

  const [submitDisabled, setSubmitDisabled] = useState(false);

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

  const submitHandler =  e => {
    e.preventDefault();
    if (!adminIDIsValid && !passwordIsValid) return;

    const values = {email: adminIDRef.current.value, pass: passwordRef.current.value};

    setSubmitDisabled(true);
    signInWithEmailAndPassword(auth, values.email, values.pass).then(async(res)=>{

      setSubmitDisabled(false)
      const user = res.user;
      await updateProfile(user,{
        displayName: values.email,
      });

      navigate("/admin");

    }).catch((err)=>{
      setSubmitDisabled(false);
      console.log(err.message)
    })     
  }
  

  const stylesAdminIDInvalid = (adminIDError) ? `mb-2 ${styles.invalid}` : 'mb-2'
  const stylesPasswordInvalid = (passwordError) ? `mb-2 ${styles.invalid}` : 'mb-2'

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
            placeholder="Admin ID"
            ref={adminIDRef}/>
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
            placeholder="Password"
            ref={passwordRef} />
          {passwordError}
        </div>

        <button
          type="submit"
          className={"btn btn-outline-dark " + (submitDisabled ? ' disabled' : '')}
          disabled={submitDisabled}>
          Login
        </button>

      </form>
    </div>
  )
}

export default Login