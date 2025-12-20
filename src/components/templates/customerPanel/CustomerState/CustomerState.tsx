import { CheckCircle, Clock, CreditCard, ShoppingBag } from 'lucide-react';
import React from 'react';

const states = [
    {
        label:"کل سفارشات",
        value:0,
        icon:ShoppingBag,
        bgColor:"bg-blue-50",
        textColor:"text-blue-800",
        iconColor:"text-blue-600",
    },
    {
        label:"در حال پردازش",
        value:0,
        icon:Clock,
        bgColor:"bg-orange-50",
        textColor:"text-orange-800",
        iconColor:"text-orange-600",
    },
    {
        label:"تکمیل شده",
        value:0,
        icon:CheckCircle,
        bgColor:"bg-green-50",
        textColor:"text-green-800",
        iconColor:"text-green-600",
    },
    {
        label:"مجموع هزنیه",
        value:0,
        icon:CreditCard,
        bgColor:"bg-copper/10",
        textColor:"text-copper",
        iconColor:"text-copper",
    },
]

const CustomerState:React.FC = ()=>{
  return (
    <section className="space-y-2">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {states.map((state)=>(
                <div key={state.label} className={`rounded-xl p-6 shadow-md ${state.bgColor}`}>
                    <div className="flex items-center justify-between">
                    <div>
                        <p className={`text-xl ${state.textColor}`}>{state.label}</p>
                        <p className={`text-lg ${state.textColor}`}>{(state.value).toLocaleString('fa-IR')}</p>
                    </div>
                    <state.icon className={`h-10 w-10 ${state.iconColor}`}/>
                    </div>
                </div>
            ))}
        </div>
    </section>
  )
}

export default CustomerState