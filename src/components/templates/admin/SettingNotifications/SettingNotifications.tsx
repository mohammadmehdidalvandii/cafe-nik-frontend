import { Label } from '@components/UI/Label'
import { Switch } from '@components/UI/Switch'
import { Bell } from 'lucide-react'
import React from 'react'

const SettingNotifications:React.FC = ()=>{
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center gap-3">
            <Bell className='h-5 w-5 text-primary'/>
            <h3 className="text-2xl font-bold font-sansBold">اعلان</h3>
        </div>
        <div className="space-y-4">
            <div className="flex items-center justify-between">
                <Label htmlFor='new-order' className='font-sansBold font-semibold text-muted-foreground text-lg'>اعلان سفارش جدید</Label>
                <Switch id='new-order' defaultChecked/>
            </div>
            <div className="flex items-center justify-between">
                <Label htmlFor='order-status' className='font-sansBold font-semibold text-muted-foreground text-lg'>تغییر وضعیت سفارش</Label>
                <Switch id='order-status' defaultChecked/>
            </div>
            <div className="flex items-center justify-between">
                <Label htmlFor='daily-report' className='font-sansBold font-semibold text-muted-foreground text-lg'>گزارش روزانه</Label>
                <Switch id='daily-report' />
            </div>
        </div>
    </div>
  )
}

export default SettingNotifications