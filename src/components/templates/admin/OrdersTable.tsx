import { Button } from '@components/UI/Button';
import { Input } from '@components/UI/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/UI/Table';
import { Eye, Filter, Package, Search } from 'lucide-react'
import React from 'react'



// const statusLabels:Record<string,{label:string,color:string}> = {
//     pending:{label:"در انتظار تایید", color:'bg-yellow-100  text-yellow-800'},
//     confirmed:{label:"تایید شد", color:"bg-blue-100 text-blue-800"},
//     preparing:{label:"درحال آماده سازی", color:"bg-orange-100 text-orange-800"},
//     ready:{label:"آماده تحویل", color:"bg-green-100 text-green-8000"},
//     completed:{label:"تحویل داده شده", color:"bg-gray-100 text-gray-800"},
//     cancelled:{label:"لغو شد", color:"bg-red-100 text-red-800"},
// };
const statusOptions = [
  { value: "pending", label: "در انتظار تأیید" },
  { value: "confirmed", label: "تأیید شده" },
  { value: "preparing", label: "در حال آماده‌سازی" },
  { value: "ready", label: "آماده تحویل" },
  { value: "completed", label: "تحویل داده شده" },
  { value: "cancelled", label: "لغو شده" },
];

const OrdersTable:React.FC = ()=>{
  return (
    <div className="space-y-4 mt-8">
        {/* Filter */}
        <div className="flex flex-wrap items-center gap-4 rounded-xl bg-white p-4 shadow-md">
            <div className="relative flex-1 min-w-[200px]">
                <Search className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground'/>
                <Input 
                placeholder='جستجو در سفارش ها ...'
                className='pr-10'
                />
            </div>
            <Select>
                <SelectTrigger className='w-[180px]'>
                    <Filter className='ml-2 h-4 w-4'/>
                    <SelectValue placeholder='فیلتر شعبه'/>
                </SelectTrigger>
                <SelectContent>
                    {}
                    <SelectItem value='all'>وضعیت همه شعب</SelectItem>
                </SelectContent>
            </Select>
            <Select>
                <SelectTrigger className='w-[180px]'>
                    <SelectValue placeholder='فیلتر وضعیت'/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='all'>همه وضعیت ها</SelectItem>
                    {statusOptions.map((opt)=>(
                        <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                    ))}
                </SelectContent>
            </Select>
        </div>
        <div className="rounded-xl bg-white shadow-md overflow-hidden p-4">
            <Table>
                <TableHeader>
                    <TableRow className='bg-secondary/50'>
                        <TableHead className='text-right'>کد سفارش</TableHead>
                        <TableHead className='text-right'>مشتری</TableHead>
                        <TableHead className='text-right'>شعبه</TableHead>
                        <TableHead className='text-right'>تاریخ تحویل</TableHead>
                        <TableHead className='text-right'>مبلغ</TableHead>
                        <TableHead className='text-right'>وضعیت</TableHead>
                        <TableHead className='text-right'>عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* <TableRow>
                        <TableCell colSpan={7} className='text-center py-10 text-muted-foreground'>سفارش یافت نشد</TableCell>
                    </TableRow> */}

                     <TableRow className='hover:bg-secondary/30'>
                        <TableCell>ORD-1765180716365</TableCell>
                        <TableCell>
                            <div>
                                <p className="font-medium">محمدمهدویان</p>
                                <p className="text-sm text-muted-foreground" dir='ltr'>
                                    09392223355
                                </p>
                            </div>
                        </TableCell>
                        <TableCell>شعبه ونک</TableCell>
                        <TableCell>
                            <div>
                                <p>{new Date().toLocaleDateString('fa-IR')}</p>
                                <p className="text-sm text-muted-foreground">13:00</p>
                            </div>
                        </TableCell>
                        <TableCell className='font-bold text-copper'>
                            {(120000).toLocaleString('fa-IR')}
                        </TableCell>
                        <TableCell>
                        <Select>
                            <SelectTrigger className='w-[150px]'>
                                <SelectValue placeholder='فیلتر وضعیت'/>
                            </SelectTrigger>
                            <SelectContent>
                                <SelectItem value='all'>همه وضعیت ها</SelectItem>
                                {statusOptions.map((opt)=>(
                                    <SelectItem key={opt.value} value={opt.value}>{opt.label}</SelectItem>
                                ))}
                            </SelectContent>
                        </Select>
                        </TableCell>
                        <TableCell>
                            <div className="flex items-center gap-1">
                                <Button variant='ghost' size='icon' aria-label='Details'>
                                    <Eye className='h-4 w-4'/>
                                </Button>
                                <Button variant='outline' size='sm' className='text-green-600 border-green-200 hover:bg-green-50 hover:text-green-900 hover:border-green-900'>
                                    <Package className='h-4 w-4 ml-1'/>
                                    تحویل
                                </Button>
                            </div>
                        </TableCell>
                     </TableRow>   

                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default OrdersTable