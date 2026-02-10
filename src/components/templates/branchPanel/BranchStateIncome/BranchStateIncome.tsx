import { useGetOrdersBranch } from '@services/branch.services'
import { isLast7Days, isThisMonth, isToday } from '@utils/HelperDate';
import { Calendar, DollarSign, ShoppingBag, TrendingUp } from 'lucide-react'
import React from 'react'


const BranchStateIncome:React.FC = ()=>{
  const {data:Orders} = useGetOrdersBranch();

  const orders = Orders?.order ||[];

  const income = orders?.reduce((acc:any , order:any)=>{
    const price = order.total_price || 0;
    const date = new Date(order.createdAt);

    if(isToday(date)){
      acc.daily += price;
    } 
    if(isLast7Days(date)) acc.weekly += price;
    if(isThisMonth(date)) acc.monthly += price;
    return acc
  },{
    daily:0,
    weekly:0,
    monthly:0,
  })


  const states = [
  {
    label:"درآمد امروز",
    value:income.daily,
    count:0,
    icon:Calendar,
    bgColor:'bg-blue-50',
    textCOlor:'text-blue-800',
    iconColor:'text-blue-600',
  },
  {
    label:"درآمد هفته",
    value:income.weekly,
    count:0,
    icon:TrendingUp,
    bgColor:'bg-green-50',
    textCOlor:'text-green-800',
    iconColor:'text-green-600',
  },
  {
    label:"درآمدماه",
    value:income.monthly,
    count:0,
    icon:DollarSign,
    bgColor:'bg-purple-50',
    textCOlor:'text-purple-800',
    iconColor:'text-purple-600',
  },
  {
    label:"درآمدکل",
    value:Orders?.total_revenue || 0,
    count:Orders?.orders_count || 0,
    icon:ShoppingBag,
    bgColor:'bg-copper/10',
    textCOlor:'text-copper',
    iconColor:'text-copper',
  },
]
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
              {state.value.toLocaleString('fa-IR')} تومان
            </p>
            {/* <p className={`text-lg mt-1 ${state.textCOlor}`}>
              {state?.count.toLocaleString('fa-IR')} سفارش تکمیل شده
            </p> */}
          </div>
        ))}
      </div>
    </section>
  )
}

export default BranchStateIncome