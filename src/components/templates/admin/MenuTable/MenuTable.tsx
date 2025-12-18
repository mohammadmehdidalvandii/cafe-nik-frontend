import { Badge } from '@components/UI/Badge'
import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select'
import { TableHead, TableHeader, TableRow , Table, TableBody, TableCell} from '@components/UI/Table'
import { Coffee, Edit2, Filter, Plus, Search } from 'lucide-react'
import React from 'react'

const MenuTable:React.FC = ()=>{
  return (
    <section className="space-y-4 mt-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 rounded-xl bg-white p-4 shadow-md">
            <div className="relative flex-1 min-w-[200px]">
                <Search className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground'/>
                <Input
                    placeholder='جستجو محصول ...'
                    className='pr-10'
                />
            </div>
            <Select>
                <SelectTrigger className='w-[180px]'>
                    <Filter className='ml-2 h-4 w-4'/>
                    <SelectValue placeholder='فیلتر دسته بندی'/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='all'>همه دسته بندی</SelectItem>
                    <SelectItem value='all'>قهوه</SelectItem>
                    <SelectItem value='all'>چای و دمنوش</SelectItem>
                    <SelectItem value='all'>نوشیدنی سرد</SelectItem>
                    <SelectItem value='all'>غذا</SelectItem>
                    <SelectItem value='all'>دسر</SelectItem>
                </SelectContent>
            </Select>
                <Button>
                    <Plus className='h-4 w-4 ml-2'/>
                    افزودن محصول
                </Button>
            <div className="text-sm text-muted-foreground">
                {(120).toLocaleString('fa-IR')} محصول
            </div>
        </div>
        {/* Table */}
        <div className="rounded-xl bg-white p-4 shadow-md overflow-hidden">
            <Table>
                <TableHeader>
                    <TableRow className='bg-secondary/50'>
                        <TableHead className='text-right'>محصول</TableHead>
                        <TableHead className='text-right'>دسته بندی</TableHead>
                        <TableHead className='text-right'>توضیجات</TableHead>
                        <TableHead className='text-right'>قیمت پایه</TableHead>
                        <TableHead className='text-right'>سایزبندی</TableHead>
                        <TableHead className='text-right'>عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {/* <TableRow>
                        <TableCell colSpan={6} className='text-center py-10 text-muted-foreground'>محصولی یافت نشد</TableCell>
                    </TableRow> */}

                    <TableRow className='hover:bg-secondary/30'>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Coffee className='h-5 w-5 text-primary'/>
                                </div>
                                <span className="font-bold">آمریکانو</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant='secondary'>قهوه</Badge>
                        </TableCell>
                        <TableCell className='max-w-[200px] truncate text-muted-foreground'>
                            اسپرسو با آب داغ، طعم ملایم
                        </TableCell>
                        <TableCell className='font-bold text-copper'>
                            {(55000).toLocaleString('fa-IR')}
                        </TableCell>
                        <TableCell>
                            <Badge className='bg-green-100 text-green-800'>دارد</Badge>
                            {/* <Badge variant='outline'>ندارد</Badge> */}
                        </TableCell>
                        <TableCell>
                            <Button variant='ghost' size='sm'>
                                <Edit2 className='h-4 w-4 ml-1'/>
                                ویرایش
                            </Button>
                        </TableCell>
                    </TableRow>
                </TableBody>
            </Table>
        </div>
    </section>
  )
}

export default MenuTable