import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import React from 'react'

const SignUpFull:React.FC = ()=>{
  return (
    <form action="#" className="space-y-4">
        <div>
            <Label htmlFor='full-info'>نام و نام خانوادگی </Label>
            <Input
            id='full-info'
            type='text'
            placeholder='نام خود را وارد کنید'
            className='mt-1'
            />
        </div>
        <div>
            <Label htmlFor='email'>ایمیل</Label>
            <Input
            id='email'
            type='email'
            placeholder='cafeNil@gmail.com'
            className='mt-1'
            />
        </div>
        <div>
            <Label htmlFor='phone'>شماره تلفن</Label>
            <Input
            id='phone'
            type='tel'
            placeholder='09123334455'
            className='mt-1'
            />
        </div>
        <div>
            <Label htmlFor='password'>رمزعبور</Label>
            <Input
            id='password'
            type='password'
            placeholder='********'
            className='mt-1'
            />
        </div>
        <Button type='submit' className='w-full'>
            ثبت نام
        </Button>
    </form>
)
}

export default SignUpFull