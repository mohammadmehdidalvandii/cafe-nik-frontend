import { Badge } from '@components/UI/Badge'
import { getAllProductMenu } from '@services/menu.services';
import { CakeSlice, Coffee, CookingPot, CupSoda, Leaf } from 'lucide-react'
import React from 'react'

const MenuCategories:React.FC = ()=>{
    const {data} = getAllProductMenu();


    const coffeeCount =  data?.filter((item:any) => item.categoryProduct.name === 'قهوه ').length|| 0
    const teaCount =  data?.filter((item:any) => item.categoryProduct.name === 'چای و دمنوش').length|| 0
    const coldDrinkCount =  data?.filter((item:any) => item.categoryProduct.name === 'نوشیدنی سرد').length|| 0
    const foodCount =  data?.filter((item:any) => item.categoryProduct.name === 'غذا').length|| 0
    const desertCount = data?.filter((item:any) => item.categoryProduct.name === 'دسر').length|| 0


  return (
    <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-xl bg-white p-4 shadow-md cursor-pointer transition-all hover:shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/10">
                            <Coffee className='h-5 w-5 text-primary'/>
                        </div>
                        <span className='font-sansBold font-semibold'>قهوه</span>
                    </div>
                    <Badge variant='secondary' className='bg-primary/10'>{Number(coffeeCount).toLocaleString('fa-IR')}</Badge>
                </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-md cursor-pointer transition-all hover:shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-green-100">
                            <Leaf className='h-5 w-5 text-green-600'/>
                        </div>
                        <span className='font-sansBold font-semibold'>چای و دمنوش</span>
                    </div>
                    <Badge variant='secondary' className='bg-green-100 text-green-600'>{Number(teaCount).toLocaleString('fa-IR')}</Badge>
                </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-md cursor-pointer transition-all hover:shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-100">
                            <CupSoda className='h-5 w-5 text-blue-600'/>
                        </div>
                        <span className='font-sansBold font-semibold'>نوشیدنی سرد</span>
                    </div>
                    <Badge variant='secondary' className='bg-blue-100 text-blue-600'>{Number(coldDrinkCount).toLocaleString('fa-IR')}</Badge>
                </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-md cursor-pointer transition-all hover:shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-yellow-100">
                            <CookingPot className='h-5 w-5 text-yellow-600'/>
                        </div>
                        <span className='font-sansBold font-semibold'>غذا</span>
                    </div>
                    <Badge variant='secondary' className='bg-yellow-100 text-yellow-600'>{Number(foodCount).toLocaleString('fa-IR')}</Badge>
                </div>
            </div>
            <div className="rounded-xl bg-white p-4 shadow-md cursor-pointer transition-all hover:shadow-lg">
                <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-purple-100">
                            <CakeSlice className='h-5 w-5 text-purple-600'/>
                        </div>
                        <span className='font-sansBold font-semibold'>دسر</span>
                    </div>
                    <Badge variant='secondary' className='bg-purple-100 text-purple-600'>{Number(desertCount).toLocaleString('fa-IR')}</Badge>
                </div>
            </div>
        </div>
    </div>
  )
}

export default MenuCategories