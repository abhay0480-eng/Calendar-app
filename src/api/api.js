import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = 'https://restcountries.com/v3.1/name/';

export const getPosts =  (url) => {
    const [data, setData] = useState();
    const [error, setError] = useState();
    const [loading, setLoading] = useState(false);

    useEffect(()=>{
        const controller = new AbortController()
        ;(async()=>{
            try {
                setLoading(true)
                const response = await axios.get(`${BASE_URL}/${url}`, {
                    signal: controller.signal
                 });
                setData(response.data)
            } catch (error) {
                if (axios.isCancel(error)) {
                    console.log('Request canceled', thrown.message);
                  } else {
                    // handle error
                    setError(error);
                    setLoading(false)
                    throw new Error(error.message);
                  }
                
            }finally{
                setLoading(false)
            }
        })()

        return ()=>{controller.abort()}
    },[])
 
console.log("data",data);
  return {data,error,loading}
};