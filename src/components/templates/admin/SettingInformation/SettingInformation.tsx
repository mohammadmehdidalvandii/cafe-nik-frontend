import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { User } from 'lucide-react'
import React from 'react'

const SettingInformation:React.FC = ()=>{
  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
        <div className="mb-4 flex items-center gap-3">
          <User className="h-5 w-5 text-primary" />
          <h3 className="text-2xl font-bold">امنیت</h3>
        </div>
        <div className="space-y-4">
            <form action="#">
                <div>
                    <Label htmlFor='name' className='text-lg mt-2'>نام</Label>
                    <Input
                        id='name'
                        className='mt-2'
                        dir='ltr'
                    />
                </div>
                <div>
                    <Label htmlFor='' className='text-lg mt-2'>شماره تلفن</Label>
                    <Input
                        id='name'
                        className='mt-2'
                        dir='ltr'
                    />
                </div>
                <Button className='w-full mt-8'>ذخیره تغییرات</Button>
            </form>
        </div>
    </div>
  )
}

export default SettingInformation