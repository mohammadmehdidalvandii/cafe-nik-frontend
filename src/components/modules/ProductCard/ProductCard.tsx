import { Button } from '@components/UI/Button'
import { Coffee, Plus } from 'lucide-react'
import React from 'react'

const ProductCard:React.FC = ()=>{
  return (
    <div className="group cursor-pointer rounded-xl bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
        <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
                <h3 className="text-xl font-sansBold font-extrabold">اسپرسو</h3>
                <p className="mt-1 text-[0.9rem] font-semibold text-muted-foreground line-clamp-2">قهوه تازه دم با عطر و طعم غلیظ</p>
            </div>
            <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Coffee className='h-6 w-6 text-primary'/>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div>
                <span className="text-lg font-sansBold font-bold text-copper"></span>
                <span className="mr-1 text-[0.9rem] text-muted-foreground">تومان</span>
                <span className="mr-2 text-[0.9rem] text-muted-foreground">(پایه)</span>
            </div>
            <Button variant='default' size='sm' className='font-black font-sansBold'>
                <Plus className='ml-1 h-4 w-4'/>
                افزودن
            </Button>
        </div>
    </div>
  )
}

export default ProductCard