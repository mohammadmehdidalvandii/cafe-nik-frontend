import { useGetAllCustomer } from '@services/customers.services'
import { Phone, ShoppingBag, User } from 'lucide-react'
import React from 'react'

const CustomersState:React.FC = ()=>{
    const {data} = useGetAllCustomer();

    const countCustomers = data?.length ?? 0;
    
    const totalOrders = data?.reduce(
        (sum: number, customer: any) => {
          const ordersCount = Array.isArray(customer.order)
            ? customer.order.length
            : 0;
        
          return sum + ordersCount;
    },
        0
    ) ?? 0;
    
    const averageOrders =
    countCustomers > 0
    ? Math.round(totalOrders / countCustomers)
    : 0;
    
    const customersWithOrders =
  data?.filter(
    (customer:any) =>
      Array.isArray(customer.order) && customer.order.length > 0
  ) ?? [];

  const activeCustomers = customersWithOrders.length

    return (
    <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <User className='h-6 w-6 text-primary'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">کل مشتریان</p>
                        <p className="text-2xl font-bold">{countCustomers.toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <ShoppingBag className='h-6 w-6 text-green-600'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">میانگین سفارش</p>
                        <p className="text-2xl font-bold">{averageOrders.toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/10">
                        <Phone className='h-6 w-6 text-copper'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">مشتریان فعال</p>
                        <p className="text-2xl font-bold">{activeCustomers.toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomersState