import { Badge } from '@components/UI/Badge'
import { Input } from '@components/UI/Input'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select'
import { TableHead, TableHeader, TableRow , Table, TableBody, TableCell} from '@components/UI/Table'
import { Coffee, Filter, Search } from 'lucide-react'
import React, { lazy, useMemo, useState } from 'react';
import { ProductMenusProps } from 'types/menu'
const CreateProductModel = lazy(()=>import('@models/CreateProductModel'));
const EditProductModel = lazy(()=>import('@models/EditProductModel'));

interface productData {
    products:ProductMenusProps[];
}

const MenuTable:React.FC<productData> = ({products = []})=>{
    const [search , setSearch] = useState('');
    const [category , setCategory]= useState('all');
    // Filter menus
    const filteredProducts = useMemo(()=>{
        return products.filter((menu)=>{
            const matchSearch = menu.name.includes(search) ||
            menu.description.includes(search);

            const matchCategory = category === 'all' || menu.categoryProduct.name ===  category;

            return  matchCategory && matchSearch;
        })
    },[products , search , category])

  return (
    <section className="space-y-4 mt-8">
        {/* Filters */}
        <div className="flex flex-wrap items-center gap-4 rounded-xl bg-white p-4 shadow-md">
            <div className="relative flex-1 min-w-[200px]">
                <Search className='absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground'/>
                <Input
                    placeholder='جستجو محصول ...'
                    className='pr-10'
                    value={search}
                    onChange={(e)=>setSearch(e.target.value)}
                />
            </div>
            <Select value={category} onValueChange={setCategory}>
                <SelectTrigger className='w-[180px]'>
                    <Filter className='ml-2 h-4 w-4'/>
                    <SelectValue placeholder='فیلتر دسته بندی'/>
                </SelectTrigger>
                <SelectContent>
                    <SelectItem value='all'>همه دسته بندی</SelectItem>
                    <SelectItem value='قهوه '>قهوه</SelectItem>
                    <SelectItem value='چای و دمنوش'>چای و دمنوش</SelectItem>
                    <SelectItem value='نوشیدنی سرد'>نوشیدنی سرد</SelectItem>
                    <SelectItem value='غذا'>غذا</SelectItem>
                    <SelectItem value='دسر'>دسر</SelectItem>
                </SelectContent>
            </Select>
                <CreateProductModel/>
            <div className="text-sm text-muted-foreground">
               {filteredProducts.length.toLocaleString('fa-IR')}محصول
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
                        <TableHead className='text-right'>قیمت پایه (تومان)</TableHead>
                        <TableHead className='text-right'>سایزبندی</TableHead>
                        <TableHead className='text-right'>عملیات</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {filteredProducts.length === 0 && (
                         <TableRow>
                            <TableCell colSpan={6} className='text-center py-10 text-muted-foreground'>محصولی یافت نشد</TableCell>
                        </TableRow> 
                    )}
                    {filteredProducts.map((menu)=>(
                    <TableRow className='hover:bg-secondary/30' key={menu.id}>
                        <TableCell>
                            <div className="flex items-center gap-3">
                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                                    <Coffee className='h-5 w-5 text-primary'/>
                                </div>
                                <span className="font-bold">{menu.name}</span>
                            </div>
                        </TableCell>
                        <TableCell>
                            <Badge variant='secondary'>{menu.categoryProduct.name}</Badge>
                        </TableCell>
                        <TableCell className='max-w-[200px] truncate text-muted-foreground'>
                            {menu.description}
                        </TableCell>
                        <TableCell className='font-bold text-copper'>
                            {/* {menu.base_price.toLocaleString('fa-IR')} */}
                            {menu.base_price
                            ? menu.base_price.toLocaleString('fa-IR')
                            : Number(menu.size?.medium).toLocaleString('fa-IR')
                            }
                            
                        </TableCell>
                        <TableCell>
                            {menu.size == null ?
                            <Badge variant='outline' className='bg-red-100 text-red-800'>ندارد</Badge> :
                            <Badge className='bg-green-100 text-green-800'>دارد</Badge>
                            }
                        </TableCell>
                        <TableCell>
                            <EditProductModel/>
                        </TableCell>
                    </TableRow>
                    ))}

                </TableBody>
            </Table>
        </div>
    </section>
  )
}

export default MenuTable