import { Button } from '@components/UI/Button'
import { Phone } from 'lucide-react'
import React from 'react'

const CustomerSettingBranch:React.FC = ()=>{
  return (
    <section className="mt-8">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Phone className='h-5 w-5 text-primary'/>
                شعب پیش فرض
            </h3>
            <div>
                <p className="text-lg text-muted-foreground mb-4">شعبه پیش فرض هنگام ثبت سفارش به صورت خودکار انتخاب می شود</p>
                <div className="flex items-center justify-between bg-muted rounded-lg p-4">
                    <span>هنوز شعبه ای انتخاب نشد</span>
                    <Button variant='outline' size='sm'>انتخاب شعبه</Button>
                </div>
            </div>
        </div>
    </section>
  )
}

export default CustomerSettingBranch