import React from 'react'
import ProductCard from '@components/modules/ProductCard/ProductCard';
import { NavLink } from 'react-router-dom';
import { Button } from '@components/UI/Button';
import { ArrowLeft } from 'lucide-react';
import { getAllProductMenu } from '@services/menu.services';
import { ProductMenusProps } from 'types/menu';

const MenuHome:React.FC = ()=>{
    const {data:Menus} = getAllProductMenu();

  return (
    <section className="py-16 bg-bgk ">
        <div className="container mx-auto px-8">
            <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-sansBold font-bold">منو پرطرفدار</h2>
                <p className="text-lg text-muted-foreground">محبوب ترین نوشیدنی ها و دسرهای ما</p>
            </div>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {Menus?.length === 0 && <p>هیچ محصولی در منو وجود نداره</p>}
                {Menus?.map((menu:ProductMenusProps)=>(
                    <ProductCard menu={menu} key={menu.id}/>
                ))}

            </div>
            <div className="mt-10 text-center">
                <NavLink to='/Menu'>
                    <Button variant='outline' size='lg' className='font-extrabold font-sansBold'>
                        مشاهده کامل منو
                        <ArrowLeft className='mr-2 h-5 w-5'/>
                    </Button>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default MenuHome