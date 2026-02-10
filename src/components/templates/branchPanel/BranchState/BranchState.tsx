import { useGetOrdersBranch } from '@services/branch.services'
import { CheckCircle, Clock, ShoppingBag, XCircle } from 'lucide-react'
import React from 'react'
import { data } from 'react-router-dom'



const BranchState:React.FC = ()=>{
    const {data:Orders} = useGetOrdersBranch();
    
 
    const confirmCount = Orders?.order?.filter((od:any)=>od.status === 'در انتظار تایید').length ?? 0;
    const preparationCount = Orders?.order?.filter((od:any)=>od.status === 'در حال آماده سازی').length ?? 0;
    const CompletedCount = Orders?.order?.filter((od:any)=>od.status === 'تحویل داد شد').length ?? 0;
    const CanceledCount = Orders?.order?.filter((od:any)=>od.status === 'لغو شد').length ?? 0;

    const states = [
    {
        label:'در انتظار تایید',
        value:confirmCount,
        icon:Clock,
        bgColor:'bg-yellow-50',
        textColor:'text-yellow-800',
        iconColor:'text-yellow-600'
    },
    {
        label:'درحال آماده سازی',
        value:preparationCount,
        icon:ShoppingBag,
        bgColor:'bg-orange-50',
        textColor:'text-orange-800',
        iconColor:'text-orange-600'
    },
    {
        label:'تحویل داد شد',
        value:CompletedCount,
        icon:CheckCircle,
        bgColor:'bg-green-50',
        textColor:'text-green-800',
        iconColor:'text-green-600'
    },
    {
        label:'لغو شد',
        value:CanceledCount,
        icon:XCircle,
        bgColor:'bg-red-50',
        textColor:'text-red-800',
        iconColor:'text-red-600'
    }
]

  return (
    <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {states.map((state)=>(
            <div className={`rounded-xl p-6 shadow-md ${state.bgColor}`} key={state.label}>
                <div className="flex items-center justify-between">
                    <div>
                        <p className={`text-lg font-semibold ${state.textColor}`}>{state.label}</p>
                        <p className={`text-3xl font-bold mt-1 ${state.textColor}`}>{state.value}</p>
                    </div>
                        <state.icon className={`h-10 w-10 ${state.iconColor}`}/>
                </div>
            </div>
        ))}
    </div>
  )
}

export default BranchState