import { useAuthStore } from '@store/authStore';
import {useMutation , useQuery} from '@tanstack/react-query';
const API_URL = 'http://localhost:3000/api/branch';


// get users roles manger Branch
export const UseGetAllUsersBranch = ()=>{
    const {token} = useAuthStore()
    return useQuery ({
        queryKey:['user-branch'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:3000/api/auth/users-branch',{
                method:'GET',
                headers:{Authorization:`Bearer ${token}`}
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'دریافت لیست مدیر شعبه با مشکل خورد');
            };

            const data = await res.json();
            return data.data
        }
    })
}
// get all cities
export const UseGetAllCities = ()=>{
    return useQuery ({
        queryKey:['cities'],
        queryFn: async ()=>{
            const res = await fetch('http://localhost:3000/api/city',{
                method:'GET',
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'دریافت لیست  شهر ها به مشکل خورد');
            };

            const data = await res.json();
            return data.data
        }
    })
}
