import { Phone, ShoppingBag, User } from 'lucide-react'
import React from 'react'

const CustomersState:React.FC = ()=>{
  return (
    <div className="space-y-4">
        <div className="grid gap-4 sm:grid-cols-3">
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <User className='h-6 w-6 text-primary'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">کل مشتریان</p>
                        <p className="text-2xl font-bold">{(12).toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-green-100">
                        <ShoppingBag className='h-6 w-6 text-green-600'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">میانگین سفارش</p>
                        <p className="text-2xl font-bold">{(0).toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
            <div className="rounded-xl bg-white p-5 shadow-md">
                <div className="flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-copper/10">
                        <Phone className='h-6 w-6 text-copper'/>
                    </div>
                    <div>
                        <p className="text-sm text-muted-foreground">مشتریان فعال</p>
                        <p className="text-2xl font-bold">{(120).toLocaleString('fa-IR')}</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default CustomersState