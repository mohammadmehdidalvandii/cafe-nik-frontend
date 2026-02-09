import { toast } from "sonner";

export const showSuccess = (message:string)=>{
    toast.success(message,{
        duration:3000,
        style:{
            direction:'rtl',
            background:'#15803d',
            color:'#fff',
            fontSize:'bold',
            borderRadius:'0.5rem',
            padding:'12px 16px'
        }
    })
}
export const showError = (message:string)=>{
    toast.error(message,{
        duration:3000,
        style:{
            direction:'rtl',
            background:'#ef4444',
            color:'#fff',
            fontSize:'bold',
            borderRadius:'0.5rem',
            padding:'12px 16px'
        }
    })
}
export const showWarning = (message:string)=>{
    toast.warning(message,{
        duration:3000,
        style:{
            direction:'rtl',
            background:'#facc15',
            color:'#fff',
            fontSize:'bold',
            borderRadius:'0.5rem',
            padding:'12px 16px'
        }
    })
}
export const showInfo = (message:string)=>{
    toast.info(message,{
        duration:3000,
        style:{
            direction:'rtl',
            background:'#2563bb',
            color:'#fff',
            fontSize:'bold',
            borderRadius:'0.5rem',
            padding:'12px 16px'
        }
    })
}