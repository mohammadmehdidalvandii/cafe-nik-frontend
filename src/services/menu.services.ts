import {useMutation , useQuery, useQueryClient} from '@tanstack/react-query';
import { ProductFormProps } from 'types/menu';
const API_URL = 'http://localhost:3000/api/menu/'

// Get All Menu
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
            return data.data
        }
    })
}
// Create New Menu
export const useCreateProductMenu = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (formData:ProductFormProps)=>{
            const res = await fetch(`${API_URL}create`,{
                method:"POST",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData)
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'محصول جدید برای اضافه شدن با خطا مواجه شد');
            };
            const data = await res.json();
            console.log("data =>", data.data)
            return data.data
        },
        onSuccess: ()=>{
            queryClient.invalidateQueries({queryKey:['menus']})
        }
    })
}



// Get Category List
export const getAllCategories = ()=>{
    return useQuery ({
        queryKey:['category'],
        queryFn: async ()=>{
            const res = await fetch(`http://localhost:3000/api/category-product`,{
                method:'GET',
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message)
            };

            const data = await res.json();

            return data.data
        }
    })
}