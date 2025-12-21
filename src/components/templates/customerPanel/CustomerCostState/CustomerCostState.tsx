import { Calendar, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react'
import React from 'react'

const stats = [
    {
        label:"هزنیه هفته",
        value:0,
        count:0,
        icon:Calendar,
        bgColor:"bg-blue-50",
        textColor:"text-blue-800",
        IconColor:"text-blue-600",
    },
    {
        label:"هزنیه ماه",
        value:0,
        count:0,
        icon:TrendingUp,
        bgColor:"bg-green-50",
        textColor:"text-green-800",
        IconColor:"text-green-600",
    },
    {
        label:"میانگین سفارش",
        value:0,
        count:0,
        icon:DollarSign,
        bgColor:"bg-purple-50",
        IconColor:"text-purple-800",
        textColor:"text-purple-600",
    },
    {
        label:"مجموع کل",
        value:0,
        count:0,
        icon:ShoppingBag,
        bgColor:"bg-copper/10",
        textColor:"text-copper",
        IconColor:"text-copper",
    },
]

const CustomerCostState:React.FC = ()=>{
  return (
    <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {stats.map((stat)=>(
                <div className={`rounded-xl p-6 shadow-md ${stat.bgColor}`}>
                    <div className="flex items-center justify-between mb-4">
                        <span className={`text-2xl ${stat.textColor}`}>{stat.label}</span>
                        <stat.icon className={`h-6 w-6 ${stat.IconColor}`}/>
                    </div>
                    <p className={`text-xl font-bold ${stat.textColor}`}>{(169000).toLocaleString('fa-IR')} تومان</p>
                    <p className={`text-lg mt-1 ${stat.textColor}`}>{(stat.count).toLocaleString('fa-IR')} سفارش</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default CustomerCostState