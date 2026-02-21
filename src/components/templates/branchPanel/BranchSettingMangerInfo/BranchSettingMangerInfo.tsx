import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { useGetBranchUserId } from '@services/branch.services'
import { Phone } from 'lucide-react'
import React from 'react'

const BranchSettingMangerInfo:React.FC = ()=>{
        const {data:Branch} = useGetBranchUserId();
     
  return (
    <section className="space-y-6 mt-8">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                <Phone className='h-5 w-5 text-primary'/>
                اطلاعات مدیر
            </h3>
            <form action="$" className="mt-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <Label>اطلاعات مدیر</Label>
                        <Input
                            value={Branch?.user?.username}
                            className='mt-2'
                            readOnly
                        />
                    </div>
                    <div>
                        <Label>شماره تماس</Label>
                        <Input
                            value={Branch?.user?.phone}
                            className='mt-1'
                            dir='ltr'
                            readOnly
                        />
                    </div>
                </div>
                {/* <Button type='submit' className='mt-4'>ذخیره تغییرات</Button> */}
            </form>
        </div>
    </section>
  )
}

export default BranchSettingMangerInfo