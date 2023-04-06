import React from 'react';
import useHttp from '../../hooks/use-http';
// import useHttp from '../../hooks/use-http';
import AdminForm from './AdminForm';


const Admin = () => {

    const {isLoading, error, sendReq}  = useHttp();

    const addInfo = async(titleValue, detailValue)=>{
        
        sendReq({
          url: "https://opportunist-io-default-rtdb.firebaseio.com/events.json",
          method: 'POST',
          body: {
            title: titleValue,
            description: detailValue
          },
          headers:{
            'Content-type': 'application/json',
          }
        })
      }

  return (
    <>
        <AdminForm onEnterInfo={addInfo} loading={isLoading}/>
        {error && <p>{error}</p>}
    </>
  )
}

export default Admin