import {useQuery} from '@tanstack/react-query';
const API_URL = 'https://cafenik-api.chbkn.run/api/auth/'

// get all customers
export const useGetAllCustomer = ()=>{
    return useQuery({
        queryKey:['customers'],
        queryFn: async ()=>{
            const res = await fetch(`${API_URL}customers`,{
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