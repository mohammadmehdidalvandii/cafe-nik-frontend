import { toast } from "sonner";

export const showSuccess = (message:string)=>{
    toast.success(message,{
        duration:5000,
        style:{
            background:'#15803d',
            color:'#fff',
            fontSize:'bold',
            borderRadius:'0.5rem',
            padding:'12px 16px'
        }
    })
}
export const showError = (message:string)=>{
    toast.success(message,{
        duration:5000,
        style:{
            background:'#ef4444',
            color:'#fff',
            fontSize:'bold',
            borderRadius:'0.5rem',
            padding:'12px 16px'
        }
    })
}
export const showWarning = (message:string)=>{
    toast.success(message,{
        duration:5000,
        style:{
            background:'#facc15',
            color:'#fff',
            fontSize:'bold',
            borderRadius:'0.5rem',
            padding:'12px 16px'
        }
    })
}
export const showInfo = (message:string)=>{
    toast.success(message,{
        duration:5000,
        style:{
            background:'#2563bb',
            color:'#fff',
            fontSize:'bold',
            borderRadius:'0.5rem',
            padding:'12px 16px'
        }
    })
}