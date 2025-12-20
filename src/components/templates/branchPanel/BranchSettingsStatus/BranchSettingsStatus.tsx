import { Label } from '@components/UI/Label'
import { Switch } from '@components/UI/Switch'
import { MapPin } from 'lucide-react'
import React from 'react'

const BranchSettingsStatus:React.FC = ()=>{
  return (
    <section className="space-y-4 mt-8">
      <div className="rounded-xl bg-white p-6 shadow-md">
        <h3 className="text-2xl font-black mb-4 flex items-center gap-2">
          <MapPin className='h-5 w-5 text-primary'/>
          وضعیت شعبه
        </h3>
        <div className="space-y-4 mt-4">
          <div className="flex items-center justify-between mb-4">
            <div>
              <Label className='font-bold text-lg'>شعبه فعال</Label>
              <p className="text-sm text-muted-foreground">در صورت غیرفعال بودن شعبه در لیست انتخاب نمایش داده نمیشود.</p>
            </div>
            <Switch/>
          </div>
          <div className="flex items-center justify-between">
            <div>
              <Label className='font-bold text-lg'>پذیرش سفارش</Label>
              <p className="text-sm text-muted-foreground">امکان ثبت سفارش جدید برای این شعبه</p>
            </div>
            <Switch defaultChecked/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default BranchSettingsStatus