import { MapPin, ShoppingBag, TrendingUp } from 'lucide-react'
import React from 'react'

const BranchesState:React.FC = ()=>{
  return (
    <section className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-4">
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <MapPin className='h-6 w-6 text-primary'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">تعداد شعب</p>
                        <p className="text-2xl font-bold">{(25).toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <TrendingUp className='h-6 w-6 text-green-600'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">درامد کل</p>
                        <p className="text-2xl font-bold">{(2924567).toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-blue-100">
                        <ShoppingBag className='h-6 w-6 text-blue-600'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">کل سفارش ها</p>
                        <p className="text-2xl font-bold">{(198).toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/10">
                        <TrendingUp className='h-6 w-6 text-copper'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">میانگین درآمد</p>
                        <p className="text-2xl font-bold">{(12399).toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BranchesState