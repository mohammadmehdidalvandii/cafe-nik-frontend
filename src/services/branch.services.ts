import { useAuthStore } from '@store/authStore';
import {useMutation , useQuery, useQueryClient} from '@tanstack/react-query';
import { BranchCreateProps, BranchesProps } from 'types/branch';
const API_URL = 'http://localhost:3000/api/branch/';


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

// get all branches;

export const useGetAllBranches = ()=>{
    return useQuery({
        queryKey:['branches'],
        queryFn: async ()=>{
            const res = await fetch(`${API_URL}`,{
                method:'GET',
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'دریافت لیست شعبه با خطا مواجه شد');
            };

            const data = await res.json();

            return data.data
        }
    })
}

// created branch 
export const useCreateBranch = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (formData:BranchCreateProps)=>{
            const res = await fetch(`${API_URL}create`,{
                method:'POST',
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData),
            });
            if(!res.ok){
                const errorData = await res.json();
                throw  new Error(errorData.message || 'ایجاد شعبه با خطا مواجه شد');
            }
            const data = await res.json();

            return data.data;
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['branches']})
        }
    })
};

// updated branch
export const useUpdateBranch = ()=>{
    const queryClient = useQueryClient();
    return useMutation({
        mutationFn: async (formData:Partial<BranchesProps>)=>{
            const res = await fetch(`${API_URL}update/${formData.id}`,{
                method:"PUT",
                headers:{'Content-Type':'application/json'},
                body:JSON.stringify(formData)
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData.message || 'اپدیت اطلاعات شعبه به مشکل خورد')
            }
        },
        onSuccess:()=>{
            queryClient.invalidateQueries({queryKey:['branches']})
        }
    })
}
// Get OrderBranchManagerId 
export const useGetOrdersBranch = ()=>{
    const {user} = useAuthStore();
    return useQuery({
        queryKey:['OrderBranch'],
        queryFn: async ()=>{
            const res = await fetch(`${API_URL}user/${user?.id}`,{
                method:"GET"
            });
            if(!res.ok){
                const errorData = await res.json();
                throw new Error(errorData || 'لیست سفارش شعبه به مشکل خورد');
            };

            const data = await res.json();

            return data.data
        }
    })
}