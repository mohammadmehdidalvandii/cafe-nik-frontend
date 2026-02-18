import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { useUpdateProfile } from '@services/auth'
import { useAuthStore } from '@store/authStore'
import { showError, showSuccess } from '@utils/Toasts'
import { User } from 'lucide-react'
import React, { useState } from 'react'

const CustomerSettingInfo:React.FC = ()=>{
    const user = useAuthStore((state)=>state.user);
    const updateProfile = useUpdateProfile();
    const [email , setEmail] = useState('');
    const [password , setPassword] = useState('');
    const [username , setUsername] = useState('')

    const handleUpdateUser = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();

        if(!email.trim() || !password.trim()){
            showError('مقدار رمزعبور و ایمیل اجباری است')
        };

        updateProfile.mutate({email , password , username:username|| username },{
            onSuccess:()=>{
                showSuccess('تغییرات با موفقیت انجام شد')
            },
            onError:(error)=>{
                showError(error.message);
                setEmail('');
                setPassword('');
                setUsername('')
            }
        })

    }

  return (
    <div className="space-y-6">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-sansBold font-bold mb-4 flex items-center gap-2">
                <User className='h-5 w-5 text-primary'/>
                تکمیل اطلاعات شخصی
            </h3>
            <form action="#" className='mt-4' onSubmit={handleUpdateUser}>
                <div className="grid gap-4 sm:grid-cols-2">
                    {user?.login_method === 'OTP' && (
                    <div>
                        <Label>نام و نام خانوادگی</Label>
                        <Input
                            className='mt-2'
                            type='text'
                            value={username}
                            onChange={e=>setUsername(e.target.value)}
                        />
                    </div>
                    )}
                    <div>
                        <Label>ایمیل</Label>
                        <Input
                            className='mt-2'
                            type='email'
                            value={email}
                            onChange={e=>setEmail(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label>رمز عبور</Label>
                        <Input
                            className='mt-2'
                            type='password'
                            value={password}
                            onChange={e=>setPassword(e.target.value)}
                        />
                    </div>
                </div>
                <Button className='mt-4' type='submit'>تکمیل اطلاعات</Button>
            </form>
        </div>
    </div>
  )
}

export default CustomerSettingInfo