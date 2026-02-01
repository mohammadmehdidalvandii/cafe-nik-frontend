import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { useRegisterMutation } from '@services/auth'
import { showError, showSuccess } from '@utils/Toasts'
import { Formik } from 'formik'
import React from 'react'
import { registerValues } from 'types/auth'

const SignUpFull: React.FC = () => {
    const registerMutation = useRegisterMutation();
  return (
    <Formik
      initialValues={{
        username: '',
        email: '',
        phone: '',
        password: '',
      }}
      onSubmit={(values:registerValues) => {
        registerMutation.mutate(values , {
            onSuccess:(data)=>{
                showSuccess('ثبت نام با موفقیت انجام شد . لطفا وارد شوید!')
                values.username = "",
                values.email = "",
                values.phone = "",
                values.password = ""
            },
            onError:(error)=>{
                showError(error.message || 'ثبت نام ناموفق بود دوباره تلاش کنید')
            }
        })
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="username">نام و نام خانوادگی</Label>
            <Input
              id="username"
              name="username"
              type="text"
              placeholder="نام خود را وارد کنید"
              className="mt-1"
              value={values.username}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="cafeNil@gmail.com"
              className="mt-1"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="phone">شماره تلفن</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="09123334455"
              className="mt-1"
              value={values.phone}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="password">رمزعبور</Label>
            <Input
              id="password"
              name="password"
              type="password"
              placeholder="********"
              className="mt-1"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full">
            ثبت نام
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default SignUpFull
