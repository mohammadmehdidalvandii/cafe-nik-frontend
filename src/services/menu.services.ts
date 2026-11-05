import { API_URL } from './api';
import {useMutation , useQuery, useQueryClient} from '@tanstack/react-query';
import { ProductFormProps } from 'types/menu';
const MENU_API = `${API_URL}/menu/`

// Get All Menu
export const getAllProductMenu = ()=>{
    return useQuery({
        queryKey:['menus'],
        queryFn: async ()=>{
            const res = await fetch(`${MENU_API}`,{
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
            const res = await fetch(`${MENU_API}create`,{
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

// Delete Menu product 
export const useDeleteMenuProduct = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn:async (id:string)=>{
            const res = await fetch(`${MENU_API}delete/${id}`,{
                method:'DELETE',
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'عملیات حذف با مشکل برخورد')
            };

            const data = await res.json();
            return data.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['menus']})
        }
    })
}
// Update Menu Product
export const useUpdateProductMenu = ()=>{
        const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (form:Partial<ProductFormProps>)=>{
            const res = await fetch(`${MENU_API}update/${form.id}`,{
                method:"PUT",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(form),
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'عملیات اپدیت محصول با خطا مواجه شد')
            };
            const data = await res.json();
    
            return data.data
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['menus']})
        }
    })
}

// Get Category List
export const getAllCategories = ()=>{
    return useQuery ({
        queryKey:['category'],
        queryFn: async ()=>{
            const res = await fetch(`${API_URL}/category-product`,{
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