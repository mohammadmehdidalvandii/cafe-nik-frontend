import { useGetOrderUser } from '@services/orders.services'
import React from 'react'
import { OrdersProps } from 'types/orders'

const CustomerCostDetails:React.FC = ()=>{
     const { data: Orders } = useGetOrderUser();
    
     const monthlyTotal = React.useMemo(() => {
  if (!Orders) return 0;

  const now = new Date();

  return Orders.reduce((total: number, order: OrdersProps) => {
    const orderDate = new Date(order.createdAt);

    const isSameMonth =
      orderDate.getFullYear() === now.getFullYear() &&
      orderDate.getMonth() === now.getMonth();

    if (isSameMonth) {
      return total + Number(order.total_price || 0);
    }

    return total;
  }, 0);
}, [Orders]);

  return (
    <section className="space-y-4 mt-8">
        <div className="rounded-xl bg-white p-6 shadow-md">
                <h3 className="text-lg font-bold mb-4">خلاصه هزنیه ها براساس ماه</h3>
                {/* Not orders */}
                {Orders?.length === 0 && (
             <p className="text-muted-foreground text-center py-8">هنوز سفارش تکمیل شده ای وجود نداره</p>      
                )}

                <div className="space-y-3">
                    <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4">
                        <div>
                            <span className="font-medium">
                                {new Date().toLocaleDateString('fa-IR',{month:'long'})}
                            </span>
                            <p className="text-sm text-muted-foreground">
                                {new Date().toLocaleDateString('fa-IR',{day:'numeric'})}
                            </p>
                        </div>
                        <span className="font-bold text-copper">
                            {(monthlyTotal).toLocaleString('fa-IR')} تومان
                        </span>
                    </div>
                </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-bold mb-4">آخرین خرید ها</h3>
            {/* not buy */}
            {Orders?.length === 0 && (
            <p className="text-muted-foreground text-center py-8">
                هنوز خریدی انجام نشده
            </p> 
            )}

            <div className="space-y-4">
                {Orders?.slice(0 , 3).map((order:OrdersProps)=>(
                <div className="flex items-center justify-between bg-muted/50 rounded-lg p-4" key={order.id}>
                    <div>
                    <span className="font-medium">سفارش : ORD-{order.id}</span>
                    <p className="text-sm text-muted-foreground">
                        شعبه {order.branch.name} - {new Date(order.delivery_date).toLocaleDateString('fa-IR')}
                    </p>
                    </div>
                    <span className="font-bold text-copper">
                        {Number(order.total_price).toLocaleString('fa-IR')} تومان
                    </span>
                </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default CustomerCostDetails