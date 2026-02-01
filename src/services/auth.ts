import { useMutation } from "@tanstack/react-query";
import { RegisterPhoneCodePayload, RegisterPhonePayload, registerValues } from "types/auth";
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

export const useRegisterWithPhone = ()=>{
    return useMutation({
        mutationFn: async (values:RegisterPhonePayload)=>{
            const res = await fetch(`${API_URL}registerPhone`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(values)
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'ثبت نام ناموفق بود چند دقیقه دیگر دوباره تلاش کنید ')
            };

            return res.json();
        }
    })
};

export const useRegisterPhoneCode = ()=>{
    return useMutation({
        mutationFn: async (values:RegisterPhoneCodePayload)=>{
            const res = await  fetch(`${API_URL}register-code`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(values)
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'کد وارد شد نادرست میباشید  یا معتبر نیست ')
            };
            return res.json();
        }
    })
}

