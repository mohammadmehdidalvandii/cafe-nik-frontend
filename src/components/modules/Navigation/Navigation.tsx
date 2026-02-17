import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import {Coffee, ShoppingCart, User} from 'lucide-react';
import { Button } from '@components/UI/Button';
import { useAuthStore } from '@store/authStore';
import { useLogoutMutation } from '@services/auth';
import Swal from 'sweetalert2';
import { useCartStore } from '@store/cartStore';

const Navigation:React.FC  =()=>{
    const {cart} = useCartStore()
    const logoutMutation = useLogoutMutation();
    const {user , isAuthenticated} = useAuthStore();
    const navigate = useNavigate();

    const ROLE_CONFIG = {
        "مدیریت":{
            path:'/Admin'
        },
       "مدیر شعبه":{
            path:'/Branch'
        },
        "مشتری":{
            path:'/Customer'
        } as any
    };

    const handlerLogout = ()=>{
           Swal.fire({
             icon:"warning",
             title:`آیا ${user?.username} از خروج خود اطمینان دارید ؟`,
             color:"#262626",
             confirmButtonText:"بله",
             confirmButtonColor:"#a3491f",
             showCancelButton:true,
             cancelButtonText:"نه",
             cancelButtonColor:"red"
           }).then((result)=>{
             if(result.isConfirmed){
               logoutMutation.mutate();
               navigate('/' , {replace:true})
             }
           })
    }
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-bgk/95 backdrop-blur">
        <div className="container mx-auto px-8 flex h-16 items-center justify-between">
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
                        {cart.length > 0 && (
                            <span className="absolute -left-1 -top-1 flex h-5 w-5 items-center justify-center rounded-full bg-copper text-xs font-sansBold font-bold text-white">{cart.length.toLocaleString('fa-IR')}</span>
                        )}
                    </Button>
                </NavLink>
            {/* isAuthenticated */}
            {isAuthenticated && user ? (
            <div className="md:flex items-center gap-2 ">
                     <NavLink to={`${ROLE_CONFIG[user.roles].path}`}>
                    <Button variant='outline' size='sm'>
                    <User className='ml-2 h-4 w-4'/>
                        {user?.username}
                    </Button>
                    </NavLink>
            
                <Button variant='ghost' size='sm' onClick={handlerLogout}>
                خروج
                </Button>
                </div>
            ):(
            <NavLink to='/Auth/Login' className='md:block'>
                <Button variant='default' size='sm'>ورود</Button>
            </NavLink>
            )}
            </div>
        </div>
    </nav>
  )
}

export default Navigation