import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { Clock } from 'lucide-react'
import React from 'react'

const BranchSettingsWorking:React.FC = ()=>{
  return (
    <section className="space-y-4 mt-8">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-lg font-black mb-4 flex items-center gap-2">
                <Clock className='h-5 w-5 text-primary'/>
                ساعت کاری
            </h3>
            <form action="#" className="mt-4">
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <Label>ساعت شروع</Label>
                        <Input
                            defaultValue='08:00'
                            className='mt-2'
                        />
                    </div>
                    <div>
                        <Label>ساعت پایان</Label>
                        <Input
                            defaultValue='22:00'
                            className='mt-2'
                        />
                    </div>
                </div>
                    <Button className='mt-4'>ذخیره ساعات کاری</Button>
            </form>
        </div>
    </section>
  )
}

export default BranchSettingsWorking