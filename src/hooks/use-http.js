import {useState} from 'react'

const useHttp = () => {

    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);

    const sendReq = async(reqConfig)=>{
        setIsLoading(true);
        setError(null);

    try{
        const response = await fetch(
            reqConfig.url, {
                method: reqConfig.method ? reqConfig.method : 'GET',
                headers: reqConfig.headers ? reqConfig.headers: {},
                body: reqConfig.body ? JSON.stringify(reqConfig.body) : null
            }
        );
        
        if (!response.ok){
            throw new Error('Request failed!');
        }

        }catch(err){
            setError(err.message || 'Something went wrong!')
        }
        setIsLoading(false);
    };


  return {
    isLoading,
    error,
    sendReq};  
}

export default useHttp