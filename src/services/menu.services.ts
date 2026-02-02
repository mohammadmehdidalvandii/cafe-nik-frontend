import {useMutation , useQuery} from '@tanstack/react-query';
const API_URL = 'http://localhost:3000/api/menu/'

export const getAllProductMenu = ()=>{
    return useQuery({
        queryKey:['menus'],
        queryFn: async ()=>{
            const res = await fetch(`${API_URL}`,{
                method:'GET',
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'دریافت منو با مشکل برخورد');
            };
            const data = await res.json();
            return data
        }
    })
}