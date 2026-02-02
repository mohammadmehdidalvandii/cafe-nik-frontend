import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input";
import { Label } from "@components/UI/Label";
import { useRegisterPhoneCode, useRegisterWithPhone } from "@services/auth";
import { showError, showSuccess } from "@utils/Toasts";
import { Formik } from "formik";
import React from "react";
import { SignUpOTPFormValues } from "types/auth";
import { useNavigate } from "react-router-dom";

const SignUpOTP: React.FC = () => {
  const navigate = useNavigate();
  const registerWithPhone = useRegisterWithPhone();
  const registerPhoneCode = useRegisterPhoneCode();
  return (
    <Formik<SignUpOTPFormValues>
      initialValues={{
        phone: "",
        code: "",
        sentCode: false,
      }}
      onSubmit={(values, { setFieldValue }) => {
        if (!values.sentCode) {
          registerWithPhone.mutate({phone:values.phone} ,{
          onSuccess:(data)=>{
            showSuccess('کد به شماره تلفن  شما ارسال شد ')
            setFieldValue("sentCode", true);
          },
          onError:(error)=>{
            showError(error.message)
          }
        })
        } else {
          registerPhoneCode.mutate({
            phone:values.phone,
            code:values.code
          },{
            onSuccess:(data)=>{
              showSuccess('ثبت نام شما موفقیت آمیزبود')
              navigate('/')
            },
            onError:(error)=>{
              showError(error.message)
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

export default SignUpOTP;
