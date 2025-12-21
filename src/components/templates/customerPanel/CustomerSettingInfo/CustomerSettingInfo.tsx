import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { User } from 'lucide-react'
import React from 'react'

const CustomerSettingInfo:React.FC = ()=>{
  return (
    <div className="space-y-6">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-sansBold font-bold mb-4 flex items-center gap-2">
                <User className='h-5 w-5 text-primary'/>
                اطلاعات شخصی
            </h3>
            <form action="#" className='mt-4'>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <Label>نام و نام خانوادگی</Label>
                        <Input
                            className='mt-2'
                        />
                    </div>
                    <div>
                        <Label>شماره تماس</Label>
                        <Input
                            className='mt-2'
                            dir='ltr'
                        />
                    </div>
                    <div className='sm:col-span-2'>
                        <Label>ایمیل</Label>
                        <Input
                            type='email'
                            dir='ltr'
                            className='mt-2'
                        />
                    </div>
                </div>
                <Button className='mt-4'>ذخیره تغییرات</Button>
            </form>
        </div>
    </div>
  )
}

export default CustomerSettingInfo