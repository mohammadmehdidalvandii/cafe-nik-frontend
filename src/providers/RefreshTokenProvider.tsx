import { getValidToken } from '@services/auth';
import React, { useEffect } from 'react'

const  RefreshTokenProvider = ()=>{
  useEffect(()=>{
    const interval = setInterval(async ()=>{
        const expiry = localStorage.getItem('accessTokenExpiry');
        if(!expiry) return
        const timeLeft =Number(expiry) - Date.now();
        if(timeLeft < 60 * 1000){
            await getValidToken()
        }
    },60 * 1000);

    return ()=>clearInterval(interval)
  },[])  
  return null
}

export default RefreshTokenProvider