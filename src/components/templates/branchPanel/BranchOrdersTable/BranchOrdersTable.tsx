import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/UI/Table'
import { Eye, Search } from 'lucide-react'
import React, { lazy } from 'react';
const PickupCodeVerifyModel = lazy(()=>import('@models/PickupCodeVerifyModel'));

const statusOptions = [
  { value: "pending", label: "در انتظار تأیید" },
  { value: "confirmed", label: "تأیید شده" },
  { value: "preparing", label: "در حال آماده‌سازی" },
  { value: "ready", label: "آماده تحویل" },
  { value: "completed", label: "تحویل داده شده" },
  { value: "cancelled", label: "لغو شده" },
]

const BranchOrdersTable:React.FC = ()=>{
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
                />
              </div>
              <Select>
                <SelectTrigger className='w-[180px]'>
                  <SelectValue placeholder='وضعیت'/>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value='all'>همه وضعیت ها</SelectItem>
                  {statusOptions.map((opt)=>(
                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
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
                  {/* <TableRow>
                    <TableCell colSpan={7} className='text-center text-xl font-black py-10 text-muted-foreground'>سفارش یافت نشد</TableCell>
                  </TableRow> */}
                  <TableRow>
                    <TableCell className='font-medium'>ORD-1766059041816</TableCell>
                    <TableCell>مدیر شعبه ونک</TableCell>
                    <TableCell dir='ltr' className='text-right'>09123335566</TableCell>
                    <TableCell>
                      {new Date().toLocaleDateString('fa-IR')} - 14:00
                    </TableCell>
                    <TableCell className='font-bold text-copper'>
                      {(97500).toLocaleString('fa-IR')}
                    </TableCell>
                    <TableCell>
                                    <Select>
                <SelectTrigger className='w-[120px]'>
                    <span className="rounded-full px-2 py-0 5 text-lg">
                      در انتظار
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
                        <Button variant='ghost' size='sm' aria-label='details'>
                          <Eye className='h-4 w-4'/>
                        </Button>
                        <PickupCodeVerifyModel/>
                      </div>
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>
      </div>
    </section>
  )
}

export default BranchOrdersTable