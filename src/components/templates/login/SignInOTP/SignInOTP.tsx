import { Button } from '@components/UI/Button';
import { Input } from '@components/UI/Input';
import { Label } from '@radix-ui/react-label';
import { useLoginWithPhone, useLoginWithPhoneCode } from '@services/auth';
import { showError, showSuccess } from '@utils/Toasts';
import { Formik } from 'formik';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { LoginWithOTP } from 'types/auth';


const SignInOTP: React.FC = () => {
  const navigate = useNavigate()
  const loginPhone = useLoginWithPhone();
  const loginPhoneCode = useLoginWithPhoneCode();
  return (
    <Formik<LoginWithOTP>
      initialValues={{
        phone: '',
        code: '',
        sentCode: false,
      }}
      onSubmit={(values, { setFieldValue }) => {
        if (!values.sentCode) {
          loginPhone.mutate({phone:values.phone},{
            onSuccess:(data)=>{
              showSuccess('کد به شماره شما ارسال شد')
              setFieldValue('sentCode', true);      
            },
            onError:(error)=>{
              showError(error.message || 'شماره تلفن معتبر نیست ')
            }
          })
        } else {
            loginPhoneCode.mutate({
              phone:values.phone,
              code:values.code
            },{
              onSuccess:(data)=>{
                showSuccess('ورود شما موفقیت آمیز بود');
                navigate('/')
              },
              onError:(error)=>{
                showError(error.message || 'ورود شما ناموفق بود دوباره تلاش کنید')
              }
            })
        }
      }}
    >
      {({ values, handleChange, handleSubmit }) => (
        <form onSubmit={handleSubmit} className="space-y-4">
          {!values.sentCode ? (
            <>
              <div>
                <Label htmlFor="phone">شماره تلفن</Label>
                <Input
                  id="phone"
                  name="phone"
                  type="tel"
                  className="mt-1"
                  placeholder="09123334455"
                  value={values.phone}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full">
                ارسال شماره تلفن
              </Button>
            </>
          ) : (
            <>
              <div>
                <Label htmlFor="code">کد تایید</Label>
                <Input
                  id="code"
                  name="code"
                  type="text"
                  className="mt-1"
                  placeholder="لطفا کد 6 رقمی وارد کنید"
                  value={values.code}
                  onChange={handleChange}
                />
              </div>

              <Button type="submit" className="w-full">
                ارسال کد
              </Button>
            </>
          )}
        </form>
      )}
    </Formik>
  );
};

export default SignInOTP;
