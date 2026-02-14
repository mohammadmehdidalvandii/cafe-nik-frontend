import { useGetOrderUser } from '@services/orders.services';
import { CheckCircle, Clock, CreditCard, ShoppingBag } from 'lucide-react';
import React from 'react';



const CustomerState:React.FC = ()=>{
    const {data:Orders} = useGetOrderUser();

    const countOrder = Orders?.length ?? 0
    const countWaiting = Orders?.filter((order:any)=>order.status === 'در انتظار تایید').length ?? 0;
    const countCompleted = Orders?.filter((order:any)=> order.status === 'تحویل داد شد').length ?? 0;
    const totalCost = Orders?.reduce((acc: number, order: any) => acc + (order.total_price ?? 0),0) ?? 0;

    const states = [
    {
        label:"کل سفارشات",
        value:countOrder,
        icon:ShoppingBag,
        bgColor:"bg-blue-50",
        textColor:"text-blue-800",
        iconColor:"text-blue-600",
    },
    {
        label:"در حال پردازش",
        value:countWaiting,
        icon:Clock,
        bgColor:"bg-orange-50",
        textColor:"text-orange-800",
        iconColor:"text-orange-600",
    },
    {
        label:"تکمیل شده",
        value:countCompleted,
        icon:CheckCircle,
        bgColor:"bg-green-50",
        textColor:"text-green-800",
        iconColor:"text-green-600",
    },
    {
        label:"مجموع هزنیه",
        value:totalCost,
        icon:CreditCard,
        bgColor:"bg-copper/10",
        textColor:"text-copper",
        iconColor:"text-copper",
    },
]
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