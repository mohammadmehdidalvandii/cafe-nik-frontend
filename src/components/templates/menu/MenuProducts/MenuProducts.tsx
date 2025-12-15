import ProductCard from '@components/modules/ProductCard/ProductCard'
import { cn } from '@utils/cn'
import { Cake, Coffee, Icon, Leaf, Snowflake, UtensilsCrossed } from 'lucide-react'
import React, { useState } from 'react'

const  categories = [
    {key:"Coffee" , name:"قهوه" ,icon:Coffee},
    {key:"Tea" , name:"چای و دمنوش" ,icon:Leaf},
    {key:"Cold" , name:"نوشیدنی سرد" ,icon:Snowflake},
    {key:"Food" , name:"غذا" ,icon:UtensilsCrossed},
    {key:"Dessert" , name:"دسر" ,icon:Cake},
]

const MenuProducts:React.FC = ()=>{
    const [activeCategory , setActiveCategory] = useState<string>('Coffee')

  return (
    <section className="py-12">
        <div className="container px-8 md:px-24">
            <div className="mb-8 flex flex-wrap justify-center gap-2">
                {categories.map(({key , icon:Icon , name})=>(
                    <button
                    key={key}
                    onClick={()=>setActiveCategory(key)}
                    className={cn(
                        'flex items-center gap-2 rounded-full px-6 py-3 text-lg font-sansBold font-semibold transition-all cursor-pointer',
                        activeCategory === key ?'bg-primary text-primary-foreground shadow-lg':
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
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
                <ProductCard/>
            </div>
        </div>
    </section>
  )
}

export default MenuProducts