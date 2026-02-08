import {useMutation, useQuery, useQueryClient} from '@tanstack/react-query';
const API_URL ='http://localhost:3000/api/order/';

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
};

export const useGetPickUpCode = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (pickupCode:string)=>{
            console.log("p =>" ,pickupCode)
            const res = await fetch(`${API_URL}deliver`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify({pickup_code:pickupCode})
            });
            if(!res.ok){
                const errorData = await res.json();
                console.log("e= >" ,errorData)
                throw new Error(errorData.message || 'کد تحویل نامعتبر هست');
            }
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['orders']})
        }
    })
}
