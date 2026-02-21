import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { useGetBranchUserId } from '@services/branch.services'
import { Building2 } from 'lucide-react'
import React from 'react'

const BranchSettingInfo:React.FC = ()=>{
    const {data:Branch} = useGetBranchUserId();

  return (
    <section className="space-y-4">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                <Building2 className='h-5 w-5 text-primary'/>
                اطلاعات شعبه
            </h3>
            <div className="grid gap-4 sm:grid-cols-2">
                <div>
                    <Label>نام شعبه</Label>
                    <Input
                        value={Branch?.name}
                        readOnly
                        className='mt-2'
                    />
                </div>
                <div>
                    <Label>شهر</Label>
                    <Input
                        value={Branch.city?.name}
                        readOnly
                        className='mt-2'
                    />
                </div>
                <div className='sm:col-span-2'>
                    <Label>آدرس</Label>
                    <Input
                        value={Branch?.address}
                        readOnly
                        className='mt-2'
                    />
                </div>
            </div>
        </div>
    </section>
  )
}

export default BranchSettingInfo