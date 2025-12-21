import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select'
import { ArrowLeft, Calendar, Check, Coffee, MapPin, ShoppingBag, User } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const OrderContent:React.FC = ()=>{
  return (
    <section>
        {/* Empty Basket */}
        {/* <div className="container px-8 flex min-h-[60vh] flex-col items-center justify-center py-10">
            <ShoppingBag className='mb-4 h-16 w-16 text-muted-foreground'/>
            <h1 className="mb-2 text-2xl font-bold">سبد خرید خالی است</h1>
            <p className="mb-6 text-muted-foreground">ابتدا محصولات دلخواه را به سبد اضافه کنید</p>
            <NavLink to='/Menu'>
                <Button>
                    مشاهده منو
                    <ArrowLeft className='mr-2 h-4 w-4'/>
                </Button>
            </NavLink>
        </div> */}

        <div className="container px-8 py-10">
            <h1 className="mb-2 text-3xl font-bold">تمکیل سفارش</h1>
            <p className="mb-8 text-muted-foreground">شعبه و زمان تحویل را انتخاب کنید</p>

            <form action="#">
                <div className="grid gap-8 lg:grid-cols-3">
                    <div className="space-y-6 lg:col-span-2">
                        {/* Guest Info */}
                        <div className="rounded-xl bg-white p-6 shadow-md">
                            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                                <User className='h-5 w-5 text-copper'/>
                                اطلاعات تماس
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <Label htmlFor='name'>نام و نام خانوادگی</Label>
                                    <Input
                                        id='name'
                                        placeholder='نام  خود را وارد کنید'
                                        className='mt-2'
                                    />
                                </div>
                                <div>
                                    <Label htmlFor='phone'>شماره تماس</Label>
                                    <Input
                                        id='phone'
                                        placeholder='09123332211'
                                        className='mt-2'
                                    />
                                </div>
                            </div>
                            <p className="mt-4 text-sm text-muted-foreground">
                                برای پیگیری سفارش ها {''}
                                <NavLink to='/Auth/Login' className='text-copper underline'>وارد شوید</NavLink>
                            </p>
                        </div>
                        {/* Branch Selection */}
                        <div className="rounded-xl bg-white p-6 shadow-md">
                            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                                <MapPin className='h-5 w-5 text-copper'/>
                                انتخاب شعبه
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <Label>شهر</Label>
                                    <Select>
                                        <SelectTrigger className='mt-1'>
                                            <SelectValue placeholder="انتخاب شهر"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='تهران'>تهران</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>شعبه</Label>
                                    <Select>
                                        <SelectTrigger className='mt-1'>
                                            <SelectValue placeholder="انتخاب شعبه"/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='ونک'>ونک</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                            {/* Detail branch  */}
                            <div className="mt-4 rounded-lg bg-secondary/50 p-4 font-bold">
                                <p className="text-sm">
                                    <strong>آدرس:</strong>
                                </p>
                                <p className="text-sm mt-1">
                                    <strong>ساعت کاری:</strong>
                                </p>
                                <p className="text-sm mt-1">
                                    <strong>تلفن:</strong>
                                </p>
                            </div>
                        </div>
                        {/* Date & Time */}
                        <div className="rounded-xl bg-white p-6 shadow-md">
                            <h2 className="mb-4 flex items-center gap-2 text-lg font-bold">
                                <Calendar className='h-5 w-5 text-copper'/>
                                زمان تحویل
                            </h2>
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div>
                                    <Label>تاریخ</Label>
                                    <Select>
                                        <SelectTrigger className='mt-1'>
                                            <SelectValue placeholder='انتخاب تاریخ'/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='امروز'>امروز</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                                <div>
                                    <Label>ساعت</Label>
                                    <Select>
                                        <SelectTrigger className='mt-1'>
                                            <SelectValue placeholder='انتخاب تاریخ'/>
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectItem value='امروز'>امروز</SelectItem>
                                        </SelectContent>
                                    </Select>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Order Summary */}
                    <div>
                        <div className="sticky top-28 rounded-xl bg-white p-6 shadow-md">
                            <h3 className="mb-4 text-lg font-bold">خلاصه سفارش</h3>
                            <div className="mb-4 max-h-[300px] space-y-3 overflow-y-auto border-b border-border pb-4">
                                <div className="text-sm">
                                    <div className="flex items-start gap-2">
                                        <Coffee className='mt-0.5 h-4 w-4 text-muted-foreground'/>
                                        <div className="flex-1">
                                            <div className="flex justify-between">
                                                <span>
                                                    آمریکانو (متوسط)
                                                </span>
                                                <span>2 x</span>
                                            </div>
                                            <div className="mt-0.5 text-muted-foreground">
                                                {(71500).toLocaleString('fa-IR')} تومان
                                            </div>
                                            <p className="mt-1 text-xs text-muted-foreground">
                                                لورم متن تستی میباشد
                                            </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mb-6 flex justify-between text-lg font-bold">
                                <span>مجموع</span>
                                <span className="text-copper">
                                    {(71500).toLocaleString('fa-IR')} تومان
                                </span>
                            </div>
                            {/* Info delivery */}
                            <div className="mb-4 rounded-lg bg-green-50 p-3 text-sm">
                                <div className="flex items-center gap-2 text-green-700">
                                    <Check className='h-4 w-4'/>
                                    <span className='font-medium'>اطلاعات تحویل</span>
                                </div>
                                <div className="mr-6 mt-1 space-y-1 text-muted-foreground">
                                    <p>شعبه :</p>
                                    <p>
                                        زمان: 
                                        -
                                        ساعت
                                    </p>
                                </div>
                            </div>
                            <Button type='submit' className='w-full' size='lg'>
                                ثبت سفارش
                                <ArrowLeft className='mr-2 h-5 w-5'/>
                            </Button>
                        </div>
                    </div>
                </div>
            </form>

        </div>
    </section>
  )
}

export default OrderContent