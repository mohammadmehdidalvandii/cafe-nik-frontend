import { Badge } from '@components/UI/Badge'
import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select'
import { useGetOrderUser } from '@services/orders.services'
import { ArrowLeft, Clock, Copy, MapPin, Package, Search } from 'lucide-react'
import React, { lazy, useMemo, useState } from 'react'
import { NavLink } from 'react-router-dom';
import { OrdersProps } from 'types/orders'

const CustomerOrderDetails = lazy(()=>import('@models/CustomerOrderDetails'));

const statusOptions = [
  { value: "pending", label: "در انتظار تایید" },
  { value: "confirmed", label: "تأیید شده" },
  { value: "preparing", label: "در حال آماد سازی" },
  { value: "ready", label: "آماد تحویل" },
  { value: "completed", label: "تحویل داد شد" },
  { value: "cancelled", label: "لغو شد" },
]

const CustomerOrdersTable:React.FC = ()=>{
    const {data:Orders} = useGetOrderUser();
    const [searchStatus , setSearchStatus] = useState('all');
    const [searchItem , setSearchItem] = useState('');

    const filteredOrders = useMemo(()=>{
        return Orders?.filter((order:OrdersProps)=>{
            const matchStatus = searchStatus === 'all' || order.status === searchStatus;
            const matchSearch = !searchItem || order.id 

            return matchSearch && matchStatus
        })
    },[Orders , searchItem , searchStatus]);

    
  return (
    <section className="space-y-4 mt-8">
        {filteredOrders?.length === 0 && (
             <div className="flex flex-col items-center justify-center rounded-xl bg-white py-20 shadow-md">
                <Package className='mb-4 h-16 w-16 text-muted-foreground'/>
                <h2 className="mb-2 text-xl font-bold font-sansBold">هنوز سفارشی ثبت نکرده اید</h2>
                <p className="text-muted-foreground">اولین سفارش خود را همین الان ثبت کنید</p>
                <Button asChild className='mt-4'>
                    <NavLink to='/Menu'>ثبت سفارش</NavLink>
                </Button>
            </div> 
        )}

        <div className="rounded-xl bg-white p-6 shadow-md">
            <div className="flex items-center justify-between mb-4">
                <h3 className="text-lg font-bold mb-4">آخرین سفارشات</h3>
                <Button asChild >
                    <NavLink to='/Menu'>
                        سفارش جدید
                        <ArrowLeft className='mr-2 h-4 w-4'/>
                    </NavLink>
                </Button>
            </div>
            {/* Filter search */}
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
                <div className="relative flex-1">
                    <Search className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground'/>
                    <Input
                        placeholder='جستجو بر اساس شماره یا شعبه'
                        className='pr-10'
                        value={searchItem}
                        onChange={(e)=>setSearchItem(e.target.value)}
                    />
                </div>
                <Select value={searchStatus} onValueChange={setSearchStatus}>
                  <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='وضعیت'/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value='all'>همه وضعیت ها</SelectItem>
                    {statusOptions.map((opt)=>(
                      <SelectItem key={opt.value} value={opt.label}>{opt.label}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
            </div>
            {/* Table */}
            {filteredOrders?.map((order:OrdersProps)=>(
            <div className="rounded-xl bg-white p-6 shadow-md border border-primary mt-4" key={order.id}>
                <div className="flex flex-wrap items-start justify-between gap-4 mb-4">
                    <div>
                        <div className="flex items-center gap-2">
                            <h3 className="font-bold">سفارش ORD-{order.id}</h3>
                            <span className="rounded-full px-3 py-1 text-sm bg-green-100">{order.status}</span>
                        </div>
                        <p className="mt-1 text-lg text-muted-foreground">
                            {new Date(order.updatedAt).toLocaleDateString('fa-IR')}
                        </p>
                    </div>
                    <div className="flex items-center gap-2">
                        <span className="text-lg font-bold text-copper">
                            {order.total_price.toLocaleString('fa-IR')} تومان
                        </span>
                        <CustomerOrderDetails/>
                    </div>
                </div>
                {/* Code PickUp */}
                <div className="flex items-center gap-3 p-3 mb-4 bg-primary/10 rounded-lg border border-primary/20">
                    <span className="text-sm text-muted-foreground">کد تحویل :</span>
                    <span className="font-bold text-xl text-primary tracking-[0.2em]">
                        {order.pickup_code}
                    </span>
                    <Button variant='ghost' size='icon' className='h-8 w-8 hover:bg-primary/20' aria-label='copy code'>
                        <Copy className='h-4 w-4'/>
                    </Button>
                </div>

                <div className="grid gap-4 text-sm sm:grid-cols-2 mb-4">
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <MapPin className='h-4 w-4'/>
                        <span>شعبه {order.branch.name}</span>
                    </div>
                    <div className="flex items-center gap-2 text-muted-foreground">
                        <Clock className='h-4 w-4'/>
                        <span>
                            تحویل : {order.delivery_date} -  {order.delivery_time}
                        </span>
                    </div>
                </div>

                <div className="border-t border-border pt-4">
                    <div className="flex flex-wrap gap-2">
                        <Badge variant='secondary'>
                            {order.order_items.map((od)=>(
                                od.menu.name
                            ))}
                            {order.order_items.map((od)=>(od.size !== null && od.size))}
                            *
                            {order.order_items.map((od)=>(od.quantity))}
                        </Badge>
                    </div>
                </div>
            </div>
            ))}
        </div>
    </section>
  )
}

export default CustomerOrdersTable