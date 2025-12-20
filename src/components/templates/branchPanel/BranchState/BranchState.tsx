import { CheckCircle, Clock, ShoppingBag, XCircle } from 'lucide-react'
import React from 'react'

const states = [
    {
        label:'در انتظار تایید',
        value:0,
        icon:Clock,
        bgColor:'bg-yellow-50',
        textColor:'text-yellow-800',
        iconColor:'text-yellow-600'
    },
    {
        label:'درحال آماده سازی',
        value:0,
        icon:ShoppingBag,
        bgColor:'bg-orange-50',
        textColor:'text-orange-800',
        iconColor:'text-orange-600'
    },
    {
        label:'تکمیل شد',
        value:0,
        icon:CheckCircle,
        bgColor:'bg-green-50',
        textColor:'text-green-800',
        iconColor:'text-green-600'
    },
    {
        label:'لغو شد',
        value:0,
        icon:XCircle,
        bgColor:'bg-red-50',
        textColor:'text-red-800',
        iconColor:'text-red-600'
    }
]

const BranchState:React.FC = ()=>{
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