import {useQuery, useQueryClient} from '@tanstack/react-query';
const API_URL ='http://localhost:3000/api/order';

// Get All orders
export const useGetAllOrders = ()=>{
    return useQuery({
        queryKey:['orders'],
        queryFn: async ()=>{
            const res = await fetch(`${API_URL}`,{
                method:'GET',
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'لیست دریافت سفارش به مشکل خورد')
            };
            const data = await res.json();
            return data.data
        }
    })
}
