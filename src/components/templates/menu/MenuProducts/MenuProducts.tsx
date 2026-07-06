import ProductCard from '@components/modules/ProductCard/ProductCard'
import { getAllProductMenu } from '@services/menu.services'
import { cn } from '@utils/cn'
import { Cake, Coffee, Leaf, Snowflake, UtensilsCrossed } from 'lucide-react'
import React, { useState } from 'react'
import { ProductMenusProps } from 'types/menu'

const  categories = [
    {key:"Coffee" , name:"قهوه" ,icon:Coffee},
    {key:"Tea" , name:"چای و دمنوش" ,icon:Leaf},
    {key:"Cold" , name:"نوشیدنی سرد" ,icon:Snowflake},
    {key:"Food" , name:"غذا" ,icon:UtensilsCrossed},
    {key:"Dessert" , name:"دسر" ,icon:Cake},
]

const MenuProducts:React.FC = ()=>{
    const {data:Menus} = getAllProductMenu();
    const [activeCategory , setActiveCategory] = useState<string>('قهوه')
    const filteredMenus = Menus?.filter(
      (menu: ProductMenusProps) => menu.categoryProduct.name === activeCategory
    );



  return (
    <section className="py-12">
        <div className="container mx-auto px-8 md:px-24">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
                {categories.map(({key , icon:Icon , name})=>(
                    <button
                    key={key}
                    onClick={()=>setActiveCategory(name)}
                    className={cn(
                        'flex items-center gap-2 rounded-full px-6 py-3 text-lg font-sansBold font-semibold transition-all cursor-pointer',
                        activeCategory === name ?'bg-primary text-primary-foreground shadow-lg':
                        'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                    )}
                    >
                    <Icon className='h-4 w-5'/>
                    {name}
                    </button>
                ))}
            </div>
            {/* Info Banner */}
            <div className="mb-8 rounded-lg bg-primary/10 p-4 text-center">
                <p className="text-sm">
                    <span className="font-semibold">💡 نکته : </span>نوشیدنی‌ها در سه سایز کوچک، متوسط و بزرگ موجود هستند. روی هر محصول کلیک کنید.
                </p>
            </div>
            {/* menu Items */}
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredMenus?.length === 0 && <p>هیچ محصولی در منو وجود نداره</p>}
                {filteredMenus?.map((menu:ProductMenusProps)=>(
                    <ProductCard menu={menu}/>
                ))}
            </div>
        </div>
    </section>
  )
}

export default MenuProducts