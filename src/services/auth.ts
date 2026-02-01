import { useAuthStore } from "@store/authStore";
import { useMutation } from "@tanstack/react-query";
import { LoginPhone , LoginPhoneCode , LoginWithPassword, RegisterPhoneCodePayload, RegisterPhonePayload, registerValues } from "types/auth";
const API_URL = 'http://localhost:3000/api/auth/';

// register full
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
// register phone
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
// register code
export const useRegisterPhoneCode = ()=>{
    const authStore = useAuthStore();
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
            const data = await res.json();
            

            const token = data.data.accessToken;
            const userRes = await fetch(`${API_URL}profile`,{
                headers:{Authorization : `Bearer ${token}`}
            })
            const user = await userRes.json();

            authStore.login(token , user.data)

            return data
        }
    })
}
// login with password
export const useLoginWithPassword = ()=>{
    const authStore = useAuthStore();
    return useMutation({
        mutationFn: async (values:LoginWithPassword)=>{
            const res = await fetch(`${API_URL}loginPassword`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                credentials:'include',
                body:JSON.stringify(values)
            });

            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'ایمیل یا رمز عبور معتبر نیست')
            };
            const data = await res.json();

            const token = data.data.accessToken;
            const userRes = await fetch(`${API_URL}profile`,{
                headers:{Authorization : `Bearer ${token}`}
            })

            const user = await userRes.json();

            authStore.login(token , user.data)

            return data
        }
    })
}
// login with password phone
export  const useLoginWithPhone = ()=>{
    return useMutation({
        mutationFn: async (values:LoginPhone)=>{
            console.log("va =>", values)
            const res = await fetch(`${API_URL}sendCode`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(values),
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'شماره تلفن وجود ندار یا معتبر نیست');
            };
            return res.json()
        }
    })
}
// login with password code
export const useLoginWithPhoneCode = ()=>{
    const authStore = useAuthStore();
    return useMutation({
        mutationFn: async (values:LoginPhoneCode)=>{
            const res = await fetch(`${API_URL}verify-code`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                credentials:'include',
                body:JSON.stringify(values),
            });

            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'کد نامعتبر است')
            };
            const data = await res.json();

            const token = data.data.accessToken;
            const userRes = await fetch(`${API_URL}profile`,{
                headers:{Authorization : `Bearer ${token}`}
            })

            const user = await userRes.json();

            authStore.login(token , user.data)

            return data
        }
    })
}