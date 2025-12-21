import { Label } from '@components/UI/Label'
import { Switch } from '@components/UI/Switch'
import { Bell } from 'lucide-react'
import React from 'react'

const CustomerSettingNotification:React.FC = ()=>{
  return (
    <section className="mt-8">
            <div className="rounded-xl bg-white p-6 shadow-md">
        <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
            <Bell className='h-5 w-5 text-primary'/>
            تنظمیات اعلان ها
        </h3>
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <div>
                    <Label>اعلان وضعیت سفارش</Label>
                    <p className="text-base text-muted-foreground">دریافت اعلان هنگام تغییر وضعیت سفارش</p>
                </div>
                <Switch/>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <Label>پیامک و ضعیت</Label>
                    <p className="text-base text-muted-foreground">دریافت پیامک هنگام آماده شدن سفارش</p>
                </div>
                <Switch/>
            </div>
            <div className="flex items-center justify-between">
                <div>
                    <Label>اعلان تخفیف ها</Label>
                    <p className="text-base text-muted-foreground">دریافت اطلاع رسانی درباره تخفیف ها و پیشنهادات ویژه</p>
                </div>
                <Switch/>
            </div>
        </div>
    </div>
    </section>
  )
}

export default CustomerSettingNotification