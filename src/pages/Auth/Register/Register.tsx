import SignUpFull from '@components/templates/register/SignUpFull/SignUpFull'
import SignUpOTP from '@components/templates/register/SignUpOTP/SignUpOTP'
import { Button } from '@components/UI/Button'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@components/UI/Tabs'
import { Coffee, Mail, Phone } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Register:React.FC = ()=>{
  return (
    <section className="flex min-h-screen items-center justify-center bg-secondary/50 p-4">
      <div className="w-full max-w-md rounded-2xl bg-white p-8 shadow-md">
        <NavLink to='/' className='mb-8 flex items-center justify-center gap-2'>
          <div className='flex h-12 w-12 items-center justify-center rounded-full bg-primary'>
            <Coffee className='h-6 w-6 text-primary-foreground'/>
          </div>
          <span className='text-2xl font-sansBold font-black'>کافی شاپ نیک</span>
        </NavLink>
        <h1 className='mb-6 text-center text-2xl font-sansBold font-bold'>ثبت نام</h1>
        <Tabs className='w-full' defaultValue='fullInfo'>
          <TabsList className='grid w-full grid-cols-2 mb-6'>
            <TabsTrigger value='phone'className='gap-2'>
              <Phone className='h-4 w-4'/>
              شماره تلفن
            </TabsTrigger>
            <TabsTrigger value='fullInfo' className='gap-2'>
              <Mail className='h-4 w-4'/>
              ایمیل
            </TabsTrigger>
          </TabsList>
          <TabsContent value='phone'>
            <SignUpOTP/>
          </TabsContent>
          <TabsContent value='fullInfo'>
            <SignUpFull/>
          </TabsContent>
        </Tabs>
        <div className="mt-6 text-center text-lg">
          <p>
            حساب دارید؟
            <NavLink to='/Auth/Login'>
            <Button variant='link'>
              وارد شوید
            </Button>
            </NavLink>
          </p>
        </div>
      </div>
    </section>
  )
}

export default Register