import { Button } from '@components/UI/Button'
import { ArrowLeft, ShoppingBag } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CartEmpty:React.FC = () => {
  return (
    <section className="py-12">
        <div className="container mx-auto px-8">
            <div className="flex min-h-[60vh] flex-col items-center justify-center">
              <ShoppingBag className='mb-4 h-16 w-16 text-muted-foreground'/>
              <h1 className="mb-2 text-2xl font-sansBold font-bold">سبد خرید خالی است</h1>
              <p className="mb-6 text-muted-foreground">اولین سفارش خود را ثبت کنید</p>
              <NavLink to='/Menu'>
                <Button>
                  مشاهده منو
                  <ArrowLeft className='mr-2 h-4 w-4'/>
                </Button>
              </NavLink>
            </div>
        </div>
    </section>
  )
}

export default CartEmpty  