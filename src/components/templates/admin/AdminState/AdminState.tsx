import { useGetAllBranches } from '@services/branch.services';
import { useGetAllCustomer } from '@services/customers.services'
import { useGetAllOrders } from '@services/orders.services';
import { CheckCircle, Clock, ShoppingBag, Store, TrendingUp, Users } from 'lucide-react'
import React from 'react'

const  AdminState:React.FC = ()=>{
    const {data:Customers} = useGetAllCustomer();
    const {data:Branches} = useGetAllBranches();
    const {data:Orders} = useGetAllOrders();
    console.log("orders =>" , Orders)
    const customerCount = Customers?.length ?? 0;
    const branchesCount = Branches?.length ?? 0;
    const ordersCount = Orders?.length ?? 0;

    const incomeAll = Orders?.reduce((sum:number , order:any)=>sum + (order.total_price || 0) , 0) ?? 0;

    const orderPending = Orders?.filter((order:any)=>order.status === 'در انتظار تایید');
    const orderPendingCount = orderPending?.length ?? 0
    const orderCompleted =  Orders?.filter((order:any)=>order.status === "تحویل داد شد");
    const orderComPletedCount = orderCompleted?.length ?? 0;

    const state = [
        {
            label:"کل سفارش ها",
            value:`${ordersCount.toLocaleString('fa-IR')}`,
            icon:ShoppingBag,
            color:"bg-primary-/10 text-primary",
        },
        {
            label:"کل درآمد",
            value:`${incomeAll  .toLocaleString('fa-IR')}`,
            icon:TrendingUp,
            color:"bg-green-100 text-green-600",
        },
        {
            label:"تعداد شعب",
            value:`${branchesCount.toLocaleString('fa-IR')}`,
            icon:Store,
            color:"bg-copper/10 text-copper",
        },
        {
            label:"تعداد مشتریان",
            value:`${customerCount.toLocaleString('fa-IR')}`,
            icon:Users,
            color:"bg-blue-100 text-blue-600",
        },
        {
            label:"در انتظار تایید",
            value:`${orderPendingCount.toLocaleString('fa-IR')}`,
            icon:Clock,
            color:"bg-yellow-100 text-yellow-600",
        },
        {
            label:"تحویل داد شده",
            value:`${orderComPletedCount.toLocaleString('fa-IR')}`,
            icon:CheckCircle,
            color:"bg-emerald-100 text-emerald-600",
        }
    ]

  return (
    <section>
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
            {state.map((stat)=>(
                <div
                    key={stat.label}
                 className="rounded-xl bg-white p-5 shadow-md transition-all hover:shadow-lg">
                    <div className="flex items-center gap-3">
                        <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.color}`}>
                            <stat.icon className='h-6 w-6'/>
                        </div>
                        <div className="flex-1 min-w-0">
                            <p className="text-sm text-muted-foreground truncate">{stat.label}</p>
                            <p className="text-lg font-sansBold truncate">{stat.value}</p>
                        </div>
                    </div>
                 </div>
            ))}
        </div>
    </section>
  )
}

export default AdminState