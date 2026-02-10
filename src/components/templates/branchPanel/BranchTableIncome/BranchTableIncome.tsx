import { useGetOrdersBranch } from '@services/branch.services'
import React from 'react'
import { BranchOrderProps } from 'types/branch';

const BranchTableIncome:React.FC = ()=>{
    const {data:Orders} = useGetOrdersBranch();
    const orderCompleted = Orders?.order?.filter((od:any)=>od.status === 'تحویل داد شد');
 
  return (
    <section className="rounded-xl bg-white p-6 shadow-md mt-8">
        <h3 className="text-lg font-bold mb-4">آخرین سفارشات تکمیل شده</h3>
        {/* Empty orders completed */}
        <p className="text-muted-foreground text-center py-8">
            هنوز سفارش تکمیل شده ای وجود نداره
        </p>
        {orderCompleted?.map((order:BranchOrderProps)=>(
        <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4" key={order.id}>
            <div>
                <span className="text-2xl font-medium">{order.user.username} | {order.user.phone}</span>
                <p className="text-lg text-muted-foreground">
                    {order.delivery_date} | {order.delivery_time}
                </p>
            </div>
            <span className="font-bold text-xl text-copper">
                {order.total_price.toLocaleString('fa-IR')}
            </span>
        </div>
        ))}
    </section>
  )
}

export default BranchTableIncome