import { Label } from '@components/UI/Label'
import { Switch } from '@components/UI/Switch'
import React from 'react'

const BranchSettingNotification:React.FC =()=>{
  return (
    <section className="space-y-4 mt-8">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-black mb-4">
                تنظیمات اعلان ها
            </h3>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <Label className='font-bold text-xl'>اعلان سفارش جدید</Label>
                    <p className="text-sm text-muted-foreground">دربافت اعلان برای سفارش جدید</p>
                </div>
                <Switch />
            </div>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <Label className='font-bold text-xl'>اعلان صوتی</Label>
                    <p className="text-sm text-muted-foreground">پخش هنگام دریافت سفارش جدید</p>
                </div>
                <Switch />
            </div>
            <div className="flex items-center justify-between mb-4">
                <div>
                    <Label className='font-bold text-xl'>پیامک سفارش</Label>
                    <p className="text-sm text-muted-foreground">ارسال پیامک به مشتری هنگام تغییر وضعیت سفارش</p>
                </div>
                <Switch />
            </div>
        </div>
    </section>
  )
}

export default BranchSettingNotification