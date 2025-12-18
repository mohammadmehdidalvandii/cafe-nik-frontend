import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@components/UI/Table'
import { Eye, Search, User } from 'lucide-react'
import React from 'react'

const CustomersTable:React.FC = ()=>{
  return (
    <div className="space-y-4 mt-8">
        {/* Search */}
        <div className="flex items-center gap-4 rounded-xl bg-white p-4 shadow-md">
            <div className="relative flex-1">
                <Search className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground'/>
                <Input
                placeholder='جستجوی مشتری با نام شماره تلفن'
                className='pr-10'
                />
            </div>
            <div className="text-sm text-muted-foreground">
                {(120).toLocaleString('fa-IR')} مشتری
            </div>
        </div>
        {/* Table */}
        <div className="rounded-xl bg-white shadow-md overflow-hidden p-4">
            <Table>
                <TableHeader>
                    <TableRow className='bg-secondary/50'>
                        <TableHead className='text-right'>مشتری</TableHead>
                        <TableHead className='text-right'>شماره تماس</TableHead>
                        <TableHead className='text-right'>تعداد سفارش</TableHead>
                        <TableHead className='text-right'>مجموع سفارش</TableHead>
                        <TableHead className='text-right'>آخرین سفارش</TableHead>
                        <TableHead className='text-right'>عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* <TableRow>
                        <TableCell colSpan={6} className='text-center py-10 text-muted-foreground'>مشتری یافت نشد</TableCell>
                    </TableRow> */}

                    <TableRow>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <User className='h-5 w-5 text-primary'/>
                                </div>
                                <span className="font-medium">محمد مهدویان</span>
                            </div>
                        </TableCell>
                        <TableCell dir='ltr' className='text-right'>
                            09123332244
                        </TableCell>
                        <TableCell>
                            {(2).toLocaleString('fa-IR')}       
                        </TableCell>
                        <TableCell className='font-bold text-copper'>
                            {(210000).toLocaleString('fa-IR')} تومان
                        </TableCell>
                        <TableCell>
                            {new Date().toLocaleDateString('fa-IR')}
                        </TableCell>
                        <TableCell>
                            <Button 
                            variant='ghost'
                            size='sm'
                            >
                                <Eye className='h-4 w-4 ml-1'/>
                                جزئیات
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </div>
  )
}

export default CustomersTable