import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import React from 'react'

const SignInEmailUsername:React.FC = ()=>{
  return (
    <form action="#" className='space-y-3'>
        <div>
            <Label htmlFor='email-username'>ایمیل یا نام کاربری</Label>
            <Input
            id='email-username'
            type='text'
            placeholder='ایمیل یا نام کاربری'
            className='mt-1'
            />
        </div>
        <div>
            <Label htmlFor='password'>رمزعبور</Label>
            <Input
            id='password'
            type='password'
            className='mt-1'
            placeholder='********'
            />
        </div>
        <Button type='submit' className='w-full'>
            وارد شوید
        </Button>
    </form>
  )
}

export default SignInEmailUsername