import { Coffee } from 'lucide-react'
import React, { lazy } from 'react'
import { ProductMenusProps } from 'types/menu';

const ModelAddProduct = lazy(()=>import('@models/ModelAddProduct'));
interface MenuDetailsProps{
    menu:ProductMenusProps
}

const ProductCard:React.FC<MenuDetailsProps> = ({menu})=>{
    
  return (
    <div className="group cursor-pointer rounded-xl bg-white p-5 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg" key={menu.id}>
        <div className="mb-4 flex items-start justify-between">
            <div className="flex-1">
                <h3 className="text-xl font-sansBold font-extrabold ">{menu.name}</h3>
                <p className="mt-1 text-[0.9rem] font-semibold text-muted-foreground line-clamp-2">{menu.description    }</p>
            </div>
            <div className="mr-3 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
            <Coffee className='h-6 w-6 text-primary'/>
            </div>
        </div>
        <div className="flex items-center justify-between">
            <div>
                <span className="text-lg font-sansBold font-bold text-copper">{menu.base_price !== null ? menu.base_price.toLocaleString('fa-IR') : Number(menu.size?.medium)?.toLocaleString('fa-IR')}</span>
                <span className="mr-1 text-[0.9rem] text-muted-foreground">تومان</span>
                <span className="mr-2 text-[0.9rem] text-muted-foreground">(پایه)</span>
            </div>
            <ModelAddProduct menu={menu}/>
            {/* <Button variant='default' size='sm' className='font-black font-sansBold'>
                <Plus className='ml-1 h-4 w-4'/>
                افزودن
            </Button> */}
        </div>
    </div>
  )
}

export default ProductCard