import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { Shield } from 'lucide-react'
import React from 'react'

const CustomerSettingSecurity:React.FC = ()=>{
  return (
    <section className="mt-8">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className='h-5 w-5 text-primary'/>
                امنیت
            </h3>
            <form action="#" className="mt-4">
                <div>
                    <Label>رمز عبور فعل</Label>
                    <Input
                        type='password'
                        className='mt-2'
                    />
                </div>
                <div className="grid gap-4 sm:grid-cols-2">
                    <div>
                        <Label>رمز عبور جدید</Label>
                        <Input
                            type='password'
                            className='mt-2'
                        />
                    </div>
                    <div>
                        <Label>تکرار رمز عبور</Label>
                        <Input
                            type='password'
                            className='mt-2'
                        />
                    </div>
                </div>
                <Button className='mt-4'>تغییر رمزعبور</Button>
            </form>
        </div>
    </section>
  )
}

export default CustomerSettingSecurity