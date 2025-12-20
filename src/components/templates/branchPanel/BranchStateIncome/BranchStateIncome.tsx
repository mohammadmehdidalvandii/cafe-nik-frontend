import { Calendar, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react'
import React from 'react'

const states = [
  {
    label:"درآمد امروز",
    value:0,
    count:0,
    icon:Calendar,
    bgColor:'bg-blue-50',
    textCOlor:'text-blue-800',
    iconColor:'text-blue-600',
  },
  {
    label:"درآمد هفته",
    value:0,
    count:0,
    icon:TrendingUp,
    bgColor:'bg-green-50',
    textCOlor:'text-green-800',
    iconColor:'text-green-600',
  },
  {
    label:"درآمدماه",
    value:0,
    count:0,
    icon:DollarSign,
    bgColor:'bg-purple-50',
    textCOlor:'text-purple-800',
    iconColor:'text-purple-600',
  },
  {
    label:"درآمدکل",
    value:0,
    count:0,
    icon:ShoppingBag,
    bgColor:'bg-copper/10',
    textCOlor:'text-copper',
    iconColor:'text-copper',
  },
]


const BranchStateIncome:React.FC = ()=>{
  return (
    <section className="space-y-6">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {states.map((state)=>(
          <div className={`rounded-xl p-6 font-bold shadow-me ${state.bgColor}`}>
            <div className="flex items-center justify-between mb-4">
              <span className={`text-lg ${state.textCOlor}`}>{state.label}</span>
              <state.icon className={`h-6 w-6 ${state.iconColor}`}/>
            </div>
            <p className={`text-2xl mt-1 ${state.textCOlor}`}>
              {(0).toLocaleString('fa-IR')}تومان
            </p>
            <p className={`text-lg mt-1 ${state.textCOlor}`}>
              {(0).toLocaleString('fa-IR')} سفارش تکمیل شده
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default BranchStateIncome