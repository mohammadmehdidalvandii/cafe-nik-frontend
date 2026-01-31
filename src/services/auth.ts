import { useMutation } from "@tanstack/react-query";
import { registerValues } from "types/auth";
const API_URL = 'http://localhost:3000/api/auth/';





export const useRegisterMutation = ()=>{
    return useMutation({
        mutationFn: async(values:registerValues)=>{
            const res = await fetch(`${API_URL}register`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(values),
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'ثبت نام  ناموفق بود دوباره تلاش کنید')
            }

            return res.json();
        }
    })
}