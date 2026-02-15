import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { Label } from '@components/UI/Label';
import { Textarea } from '@components/UI/Textarea';
import { useCartStore } from '@store/cartStore';
import { cn } from '@utils/cn';
import { showSuccess } from '@utils/Toasts';
import { Minus, Plus, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react'
import { ProductMenusProps } from 'types/menu';

interface MenuAddProductProps{
    menu:ProductMenusProps
}

const ModelAddProduct:React.FC<MenuAddProductProps> = ({menu})=>{
    const addToCart = useCartStore((state)=>state.addToCart);
    const [showModel , setShowModel] = useState(false);
    const [selectedSize , setSelectedSize] = useState<'medium'|'small'|'large'>('medium');
    const [quantity , setQuantity] = useState(1)
    const sizeLabels: Record<string, string> = {
  small: "کوچک",
  medium: "متوسط",
  large: "بزرگ",
};
    // Price = size 
    const selectPrice = menu.size && menu.size ? Number(menu.size[selectedSize]) : Number(menu.base_price) ?? 0

    const handleAddToBasket = ()=>{

        addToCart({
            id:menu.id,
            name:menu.name,
            categoryProduct:menu.categoryProduct.name,
            size:selectedSize,
            base_price:selectPrice,
            quantity:quantity
        });
        showSuccess('سفارش شما در سبد خرید اضافه شد')
        setShowModel(false)
    }
   
  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
        <DialogTrigger asChild >
            <Button variant='default' size='sm' className='font-black font-sansBold cursor-pointer'>
                <Plus className='ml-1 h-4 w-4'/>
                افزودن
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-md'>
            <DialogHeader>
                <DialogTitle className='block text-xl text-right'>{menu.name}</DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
                <p className="text-xl font-bold text-muted-foreground">{menu.description}</p>
                {/* Size Selection  Condition*/}
{menu.size && (
  <div className="space-y-3">
    <Label className='text-lg font-semibold'>انتخاب سایز</Label>

    <div className="grid grid-cols-3 gap-2 mt-2">
      {Object.entries(menu.size).map(([sizeName, price]) => (
        <button
          key={sizeName}
          onClick={() => setSelectedSize(sizeName as "small" | "medium" | "large")}
          className={cn(
            'flex flex-col items-center rounded-lg border-2 p-3 transition-all',
            selectedSize === sizeName
              ? 'border-primary bg-primary/10'
              : 'border-border hover:border-primary/50'
          )}
        >
          <span
            className={cn(
              'mt-1 font-medium',
              selectedSize === sizeName && 'text-primary'
            )}
          >
            {sizeLabels[sizeName] ?? sizeName}
          </span>

          <span className="text-lg text-muted-foreground">
            {Number(price).toLocaleString('fa-IR')}
          </span>
        </button>
      ))}
    </div>
  </div>
)}  
                {/* Quantity */}
                <div className="space-y-3 mt-4">
                    <Label className='text-lg font-semibold'>تعداد</Label>
                    <div className="flex items-center gap-3 mt-2">
                        <Button
                            variant='outline'
                            size='icon'
                            aria-label='Decrease'
                            onClick={()=>setQuantity((prev)=>Math.max(prev - 1 , 1))}
                        >
                            <Minus className='w-4 h-4'/>
                        </Button>
                            <span className="w-10 text-center text-lg font-bold">
                                {quantity.toLocaleString('fa-IR')}
                            </span>
                        <Button
                            variant='outline'
                            size='icon'
                            aria-label='Increase'
                            onClick={()=>setQuantity((prev)=> prev + 1)}
                        >
                            <Plus className='h-4 w-4'/>
                        </Button>
                    </div>
                </div>
                {/* Notes */}
                {/* <div className="space-y-3 mt-4">
                    <Label className='text-lg font-semibold'>یادداشت (اختیاری)</Label>
                    <Textarea
                        placeholder='مثلا : بدون شکر شیر کم چرب'
                        className='resize-none mt-2'
                        rows={2}
                    />
                </div> */}
                {/* Price summary */}
                <div className="rounded-lg bg-secondary/50 p-4">
                    <div className="flex items-center justify-between">
                        <span className="font-bold">قیمت واحد :</span>
                        <span>{(selectPrice).toLocaleString('fa-IR')}</span>
                    </div>
                    <div className="mt-2 flex items-center justify-between border-t border-border pt-2">
                        <span className="font-black">جمع کل :</span>
                        <span className="text-lg font-bold text-copper">
                            {(quantity * selectPrice ).toLocaleString('fa-IR')}
                        </span>
                    </div>
                </div>
                <DialogFooter>
                    <Button
                        className='w-full'
                        size='lg'
                        onClick={handleAddToBasket}
                    >
                        <ShoppingCart className='ml-2 h-5 w-5'/>
                        افزودن به سبد خرید
                    </Button>
                </DialogFooter>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default ModelAddProduct