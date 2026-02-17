import { Coffee } from 'lucide-react'
import React from 'react'

const Features:React.FC = ()=>{
  return (
    <section className="bg-secondary/50 py-16">
        <div className="container mx-auto px-8">
            <div className="grid gap-8 md:grid-cols-3">
                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                        <Coffee className='h-6 w-6 text-primary-foreground'/>
                    </div>
                    <div>
                        <h3 className="mb-2 font-sansBold font-bold text-lg">قهوه تازه</h3>
                        <p className="text-sm text-muted-foreground">دانه های قهوه تازه رست شد با بهترین کیفیت</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                        <Coffee className='h-6 w-6 text-primary-foreground'/>
                    </div>
                    <div>
                        <h3 className="mb-2 font-sansBold font-bold text-lg">25 شعبه</h3>
                        <p className="text-sm text-muted-foreground">در 18 شهر بزرگ ایران در خدمت شما هستیم</p>
                    </div>
                </div>
                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-md">
                    <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary">
                        <Coffee className='h-6 w-6 text-primary-foreground'/>
                    </div>
                    <div>
                        <h3 className="mb-2 font-sansBold font-bold text-lg">تحویل سریع</h3>
                        <p className="text-sm text-muted-foreground">سفارش آنلاین و تحویل حضوری در زمان دلخواه</p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Features