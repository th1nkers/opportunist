import React from 'react'
import styles from './Admin.module.css'
import pic from '../../assets/pic.jpg'
import useInput from '../../hooks/use-input'
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
// import { faLock } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';




const AdminForm = (props) => {

  const titleValue = value => value.trim() !== '';
  const detailValue = value => value.trim().length >= 6;
  const titleInputRef = useRef();
  const detailInputRef = useRef();
  const imgInputRef = useRef(null);

  const {
    value: title,
    valueChangeHandler: titleChangeHandler,
    hasError: titleError,
    isValid: titleIsValid,
    inputBlurHandler: titleBlurHandler,
  } = useInput(titleValue);

  const {
    value: detail,
    valueChangeHandler: detailChangeHandler,
    hasError: detailError,
    isValid: detailIsValid,
    inputBlurHandler: detailBlurHandler
  } = useInput(detailValue);

  const handleImageChange = e =>{
    const image = e.target.files[0];
    imgInputRef.current = image;
  }

  const submitHandler = e => {
    e.preventDefault();
    if (!titleIsValid && !detailIsValid) return;

    const enterTitleValue = titleInputRef.current.value;
    const enterDetailValue = detailInputRef.current.value;
    const enterImageValue = imgInputRef.current.value;

    console.log(enterImageValue)
    props.onEnterInfo(enterTitleValue, enterDetailValue)
  }


  const stylesTextInvalid = titleError ? `mb-1 mt-1 ${styles.invalid}` : 'mb-1 mt-1'
  const stylesDetailInvalid = detailError ? `${styles.invalid}` : ''

  return (
    <>
      <div className={styles.addForm}>
        <form className={styles.form} onSubmit={submitHandler}>

          <img
            src={pic}
            alt="img for info"
            className='mb-1' />
          <input type="file" accept='image/*' onChange={handleImageChange} />

          <div className={stylesTextInvalid}>
            <input
              type="text"
              className={styles.input}
              id="title"
              onBlur={titleBlurHandler}
              value={title}
              onChange={titleChangeHandler}
              placeholder="headline"
              ref={titleInputRef} />
            {titleError}
          </div>

          <div className={stylesDetailInvalid}>
            <textarea
              className={styles.textarea + ' details'}
              id="detail"
              onBlur={detailBlurHandler}
              value={detail}
              onChange={detailChangeHandler}
              placeholder="description"
              ref={detailInputRef}
              >
            </textarea>
            {detailError}
          </div>

          <button
            type="submit"
            className={"btn btn-outline-dark " + styles.buttonSubmit}>
            {props.loading ? 'Sending...' : 'Submit'}
          </button>

        </form>
      </div>
    </>
  )
}

export default AdminForm
