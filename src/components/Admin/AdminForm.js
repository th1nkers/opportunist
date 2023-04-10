import styles from './Admin.module.css';
import useInput from '../../hooks/use-input';
import React, { useRef, useState } from 'react';
import {storage} from '../../helpers/firebaseConfig';
import {getDownloadURL, ref, uploadBytes} from 'firebase/storage';
import { v4 } from 'uuid';

const AdminForm = (props) => {

  const titleValue = value => value.trim() !== '';
  const detailValue = value => value.trim().length >= 6;
  const titleInputRef = useRef();
  const detailInputRef = useRef();
  const [image, setImage] = useState(null);
  const [imageUpload, setImageUpload] = useState(null);
  
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

  
  const handleImageChange = async e =>{
    const selectedImg = e.target.files[0];
    const selectedImgPath = URL.createObjectURL(selectedImg);
    setImage(selectedImgPath );
    setImageUpload(selectedImg);
  }
  const submitHandler = async e => {
    e.preventDefault();
    if (!titleIsValid && !detailIsValid) return;

    const enterTitleValue = titleInputRef.current.value;
    const enterDetailValue = detailInputRef.current.value;


    if(imageUpload === null)return;
    const imageRef = ref(storage,`${imageUpload.name + v4()}`);

    const snapshot = await uploadBytes(imageRef,imageUpload);
    const downloadURL = await getDownloadURL(snapshot.ref);
    
    props.onEnterInfo(enterTitleValue,enterDetailValue,downloadURL)
    
  }

  const stylesTextInvalid = titleError ? `mb-1 mt-1 ${styles.invalid}` : 'mb-1 mt-1'
  const stylesDetailInvalid = detailError ? `${styles.invalid}` : ''

  return (
    <>
      <div className={styles.addForm}>
        <form className={styles.form} onSubmit={submitHandler}>
          <img
            src={image}
            alt="uploaded img"
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
