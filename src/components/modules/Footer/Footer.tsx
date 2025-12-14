import { Coffee, Instagram, Send } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Footer:React.FC = ()=>{
  return (
    <footer className='border-t border-border bg-secondary/30'>
        <div className="container px-8 py-12">
            <div className="grid gap-8 md:grid-cols-4">
                <div>
                    <div className="mb-4 flex items-center gap-2">
                        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                            <Coffee className='h-5 w-5 text-primary-foreground'/>
                        </div>
                        <span className="text-xl font-sansBold font-bold">کافی شاپ نیک</span>
                    </div>
                    <p className="text-lg text-muted-foreground">
                        بهترین قهوه با کیفیت عالی در 25 شعبه در سراسر ایران
                    </p>
                </div>
                <div>
                    <h4 className="mb-4 text-xl font-sansBold font-black">دسترسی سریع</h4>
                    <ul className="space-y-2 text-lg text-muted-foreground">
                        <li>
                            <NavLink to='/Menu' className='font-sansBold hover:text-muted-foreground'>منو</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Branches' className='font-sansBold hover:text-muted-foreground'>شعب</NavLink>
                        </li>
                        <li>
                            <NavLink to='/Orders' className='font-sansBold hover:text-muted-foreground'>ثبت سفارش</NavLink>
                        </li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 text-xl font-sansBold font-black">تماس با ما</h4>
                    <ul className="space-y-2 text-lg text-muted-foreground">
                        <li>تلفن : 021 - 12345678</li>
                        <li></li>
                    </ul>
                </div>
                <div>
                    <h4 className="mb-4 text-xl font-sansBold font-black">شبکه های اجتماعی</h4>
                    <div className="flex gap-3">
                        <NavLink to='#' className='flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground'>
                            <Instagram className='h-5 w-5'/>
                        </NavLink>
                        <NavLink to='#' className='flex h-10 w-10 items-center justify-center rounded-full bg-muted transition-colors hover:bg-primary hover:text-primary-foreground'>
                            <Send className='h-5 w-5'/>
                        </NavLink>
                    </div>
                </div>
            </div>
            <div className="mt-8 border-t border-border pt-8 text-center text-lg text-muted-foreground">
                 © کافی‌شاپ نیک. تمامی حقوق محفوظ است.
            </div>
        </div>
    </footer>
  )
}

export default Footer