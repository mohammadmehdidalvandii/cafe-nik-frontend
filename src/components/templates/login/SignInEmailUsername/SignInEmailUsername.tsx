import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { useLoginWithPassword } from '@services/auth'
import { showError, showSuccess } from '@utils/Toasts'
import { Formik } from 'formik'
import React from 'react'
import { useNavigate } from 'react-router-dom'
import { LoginWithPassword } from 'types/auth'

const SignInEmailUsername: React.FC = () => {
    const navigate = useNavigate()
    const loginPassword = useLoginWithPassword()
  return (
    <Formik<LoginWithPassword>
      initialValues={{ email: '', password: '' }}
      onSubmit={(values:LoginWithPassword) => {
        loginPassword.mutate(values, {
            onSuccess:(data)=>{
                showSuccess('ورود شما موفقیت آمیز بود');
                navigate('/')
            },
            onError:(error)=>{
                showError(error.message || 'با شماره تلفن وارد شوید')
            }
        })
      }}
    >
      {({ handleSubmit, handleChange, values }) => (
        <form onSubmit={handleSubmit} className="space-y-3">
          <div>
            <Label htmlFor="email">ایمیل</Label>
            <Input
              id="email"
              name="email"
              type="text"
              placeholder="ایمیل یا نام کاربری"
              className="mt-1"
              value={values.email}
              onChange={handleChange}
            />
          </div>

          <div>
            <Label htmlFor="password">رمزعبور</Label>
            <Input
              id="password"
              name="password"
              type="password"
              className="mt-1"
              placeholder="********"
              value={values.password}
              onChange={handleChange}
            />
          </div>

          <Button type="submit" className="w-full">
            وارد شوید
          </Button>
        </form>
      )}
    </Formik>
  )
}

export default SignInEmailUsername
