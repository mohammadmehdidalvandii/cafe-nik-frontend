import { Badge } from '@components/UI/Badge';
import { Input } from '@components/UI/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/UI/Table'
import { useGetOrdersBranch } from '@services/branch.services';
import { useGetAllOrders } from '@services/orders.services';
import {  Search } from 'lucide-react'
import React, { lazy, useMemo, useState } from 'react';
import { OrdersProps } from 'types/orders';
const PickupCodeVerifyModel = lazy(()=>import('@models/PickupCodeVerifyModel'));
const BranchOrderDetails = lazy(()=>import('@models/BranchOrderDetails'));

const statusOptions = [
  { value: "pending", label: "در انتظار تایید" },
  { value: "confirmed", label: "تأیید شده" },
  { value: "preparing", label: "در حال آماد سازی" },
  { value: "ready", label: "آماد تحویل" },
  { value: "completed", label: "تحویل داد شد" },
  { value: "cancelled", label: "لغو شد" },
]

const BranchOrdersTable:React.FC = ()=>{
  const {data:Orders} = useGetOrdersBranch();
  const [searchStatus , setSearchStatus] = useState('all');
  const [searchItem , SetSearchItem] = useState('');

  const filteredOrders = useMemo(()=>{
    return Orders?.order?.filter((order:OrdersProps)=>{
        const matchStatus = searchStatus === 'all' || order.status === searchStatus;
        const matchSearch = !searchItem || order.user.username.toLowerCase().includes(searchItem) ||
        order.user.phone.includes(searchItem) || order.id.includes(searchItem.toLowerCase());

        return matchSearch && matchStatus 
    })
  },[Orders , searchItem , searchStatus])

  
  return (
    <section className="space-y-4 mt-8">
      <div className="rounded-xl bg-white p-6 shadow-md">
          <h3 className="text-2xl font-bold mb-4">آخرین سفارش</h3>
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div className="relative flex-1 ">
                <Search className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground'/>
                <Input
                  placeholder='جستجو بر اساس شماره سفارش نام یا تلفن'
                  className='pr-10'
                  value={searchItem}
                  onChange={(e)=>SetSearchItem(e.target.value)}
                />
              </div>
              <Select value={searchStatus} onValueChange={setSearchStatus}>
                <SelectTrigger className='w-[200px]'>
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
            <div className="rounded-xl border border-border bg-white shadow-md overflow-hidden mt-8">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className='text-right'>شماره سفارش</TableHead>
                    <TableHead className='text-right'>مشتری</TableHead>
                    <TableHead className='text-right'>تلفن</TableHead>
                    <TableHead className='text-right'>زمان تحویل</TableHead>
                    <TableHead className='text-right'>مبلغ</TableHead>
                    <TableHead className='text-right'>وضعیت</TableHead>
                    <TableHead className='text-right'>عملیات</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {filteredOrders?.length === 0 ? (
                     <TableRow>
                      <TableCell colSpan={7} className='text-center text-xl font-black py-10 text-muted-foreground'>سفارش یافت نشد</TableCell>
                    </TableRow> 
                  ):(
                    filteredOrders?.map((order:OrdersProps)=>(
                  <TableRow key={order.id}>
                    <TableCell className='font-medium'>ORD-{order.id}</TableCell>
                    <TableCell>{order.user.username}</TableCell>
                    <TableCell dir='ltr' className='text-right'>{order.user.phone}</TableCell>
                    <TableCell>
                      {order.delivery_date} - {order.delivery_time}
                    </TableCell>
                    <TableCell className='font-bold text-copper'>
                      {order.total_price.toLocaleString('fa-IR')}
                    </TableCell>
                    <TableCell>
                                    <Select>
                <SelectTrigger className='w-[180px]'>
                    <span className="rounded-full px-2 py-0 5 text-lg">
                      {order.status}
                    </span>
                </SelectTrigger>
                <SelectContent>
                  {statusOptions.map((opt)=>(
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                  ))}
                </SelectContent>
              </Select>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <BranchOrderDetails/>
                                                        {order.status === 'تحویل داد شد' ? (
                                <Badge variant='secondary'>{order.status}</Badge>
                                ):
                                <PickupCodeVerifyModel order={order}/>
                                }
                      </div>
                    </TableCell>
                  </TableRow>

                    ))
                  )}
                </TableBody>
              </Table>
            </div>
      </div>
    </section>
  )
}

export default BranchOrdersTable