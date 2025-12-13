import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {Coffee, ShoppingCart, User} from 'lucide-react';
import { Button } from '@components/UI/Button';

const Navigation:React.FC  =()=>{
    const [totalItems, setTotalItems] = useState(1)
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bgk/95 backdrop-blur">
        <div className="container px-4 flex h-16 items-center justify-between">
            <NavLink to='/' className='flex items-center gap-2'>
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                    <Coffee className='h-5 w-5 text-primary-foreground'/>
                </div>
                <span className="text-2xl font-sansBold font-bold text-secondary-foreground">کافی شاپ نیک</span>
            </NavLink>
            {/* Desktop */}
            <div className="md:flex items-center gap-4">
                <NavLink to='/Menu' className='text-muted-foreground text-lg font-sansBold font-bold transition-colors hover:text-secondary-foreground'>منو</NavLink>
                <NavLink to='/Branches' className='text-muted-foreground text-lg font-sansBold font-bold transition-colors hover:text-secondary-foreground'>شعب</NavLink>
                <NavLink to='/Orders' className='text-muted-foreground text-lg font-sansBold font-bold transition-colors hover:text-secondary-foreground'>ثبت سفارش</NavLink>
            </div>

            <div className="flex items-center gap-3">
                <NavLink to='/Cart' className='relative'>
                    <Button variant='ghost' size='icon' className='relative'>
                        <ShoppingCart className='h-5 w-5'/>
                        {totalItems > 0 && (
                            <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-copper text-xs font-sansBold font-bold text-white">{totalItems}</span>
                        )}
                    </Button>
                </NavLink>
            {/* isAuthenticated */}
            {/* <div className="md:flex items-center gap-2 ">
                <NavLink to='/'>
                <Button variant='outline' size='sm'>
                <User className='ml-2 h-4 w-4'/>
                علی محمدی
                </Button>
                </NavLink>
                <Button variant='ghost' size='sm'>
                خروج
                </Button>
                </div> */}
            <NavLink to='/Login' className='md:block'>
                <Button variant='default' size='sm'>ورود</Button>
            </NavLink>
            </div>
        </div>
    </nav>
  )
}

export default Navigation