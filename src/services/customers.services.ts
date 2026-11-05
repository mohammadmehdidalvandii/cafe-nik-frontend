import { API_URL } from './api';
import {useQuery} from '@tanstack/react-query';
const AUTH_API = `${API_URL}/auth/`

// get all customers
export const useGetAllCustomer = ()=>{
    return useQuery({
        queryKey:['customers'],
        queryFn: async ()=>{
            const res = await fetch(`${AUTH_API}customers`,{
                method:"GET"
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'دریافت لیست مشتریان بخ مشکل خورد');
            };
            const data = await  res.json();
            return data.data
        }
    })
}