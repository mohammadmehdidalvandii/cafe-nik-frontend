import { Button } from '@components/UI/Button'
import { Calendar, CheckCircle, Clock, Coffee, Copy, Home, MapPin, Phone } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const SuccessMessage:React.FC = ()=>{
  return (
    <section>
        <div className="container flex min-h-[70dvh] flex-col items-center justify-center py-10 px-8">
            <div className="w-full max-w-lg text-copper">
                {/* Success Animation */}
                <div className="mb-6 flex justify-center">
                    <div className="relative">
                        <div className="absolute inset-0 animate-ping rounded-full bg-green-400/30"/>
                        <div className="relative flex h-24 w-24 items-center justify-center rounded-full bg-green500">
                            <CheckCircle className='h-12 w-12 text-white'/>
                        </div>
                    </div>
                </div>
                <h1 className="mb-2 text-3xl font-bold text-green-600 text-center">سفارش با موفقیت ثبت شد !</h1>
                <p className="mb-8 text-muted-foreground text-center">سفارش شما دریافت شد و درحال بررسی است</p>
                {/* Pickup Code card */}
                <div className="mb-6 rounded-2xl bg-primary/10 p-6 shadow-md">
                    <p className="mb-2 text-sm text-muted-foreground text-center">کد تحویل سفارش</p>
                    <div className="mb-4 flex items-center justify-center gap-3">
                        <span className="font-mono text-4xl font-bold tracking-widest text-primary">
                            308094
                        </span>
                        <Button variant='ghost' size='icon' aria-label='copy code'>
                            <Copy className='h-5 w-5'/>
                        </Button>
                    </div>
                    <p className="text-lg text-center text-muted-foreground">
                        این کد را هنگام تحویل سفارش به شعبه ارائه دهید
                    </p>
                </div>
                {/* Order Details */}
                <div className="mb-6 space-y-4 rounded-xl bg-white p-6 text-right shadow-md">
                    <h3 className="mb-4 flex items-center gap-2 font-bold">
                        <Coffee className='h-5 w-5 text-copper'/>
                        جزئیات سفارش
                    </h3>
                    <div className="space-y-3">
                        <div className="flex items-start gap-3 rounded-lg bg-secondary/30 p-3">
                            <MapPin className='mt-0.5 h-5 w-5 text-copper'/>
                            <div>
                                <p className="text-xl font-bold text-black">شعبه زاینده‌رود</p>
                                <p className="text-lg text-muted-foreground">خیابان شیخ بهایی، نبش پل خواجو</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-lg bg-secondary/30 p-3">
                            <Phone className='mt-0.5 h-5 w-5 text-copper'/>
                            <div>
                                <p className="text-xl font-bold text-black">تماس با شعبه</p>
                                <p className="text-lg text-muted-foreground">031-32112233</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-lg bg-secondary/30 p-3">
                            <Calendar className='mt-0.5 h-5 w-5 text-copper'/>
                            <div>
                                <p className="text-xl font-bold text-black">تاریخ تحویل</p>
                                <p className="text-lg text-muted-foreground">فردا</p>
                            </div>
                        </div>
                        <div className="flex items-start gap-3 rounded-lg bg-secondary/30 p-3">
                            <Clock className='mt-0.5 h-5 w-5 text-copper'/>
                            <div>
                                <p className="text-xl font-bold text-black">ساعت تحویل</p>
                                <p className="text-lg text-muted-foreground">11:30</p>
                            </div>
                        </div>
                        <div className="mt-4 flex justify-between border-t border-border pt-4 text-lg font-bold">
                            <span className='text-black'>مبلغ کل</span>
                             <span className="text-copper">
                                {(71500).toLocaleString('fa-IR')} تومان
                            </span>
                        </div>
                    </div>
                </div>
                {/* Action Buttons */}
                <div className="flex flex-col gap-3 sm:flex-row sm:justify-center">
                    <NavLink to='/'>
                        <Button variant='outline' className='w-full sm:w-auto'>
                            <Home className='ml-2 h-4 w-4'/>
                            بازگشت به صفحه اصلی
                        </Button>
                    </NavLink>
                    <NavLink to='/Menu'>
                        <Button variant='default' className='w-full sm:w-auto'>
                            <Coffee className='ml-2 h-4 w-4'/>
                            سفارش جدید
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default SuccessMessage