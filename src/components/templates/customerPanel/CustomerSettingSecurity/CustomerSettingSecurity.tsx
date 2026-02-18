import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { useChangePassword } from '@services/auth'
import { showError, showSuccess } from '@utils/Toasts'
import { Shield } from 'lucide-react'
import React, { useState } from 'react'

const CustomerSettingSecurity:React.FC = ()=>{
    const changePassword = useChangePassword()
    const [currentPassword , setCurrentPassword] = useState('');
    const [newPassword , setNewPassword] = useState('')
    const [confirmPassword , setConfirmPassword] = useState('');

    const handleChangePassword = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault()
        if(newPassword !== confirmPassword){
            showError("رمز عبور ناهماهنگ هست")
        };

        changePassword.mutate({currentPassword , newPassword},{
            onSuccess:()=>{
                showSuccess('رمز عبور با موفقیت تغییر کرد')
            },
            onError:(error)=>{
                showError(error.message)
            }
        })
    }

  return (
    <section className="mt-8">
        <div className="rounded-xl bg-white p-6 shadow-md">
            <h3 className="text-2xl font-bold mb-4 flex items-center gap-2">
                <Shield className='h-5 w-5 text-primary'/>
                امنیت
            </h3>
            <form action="#" className="mt-4" onSubmit={handleChangePassword}>
                <div>
                    <Label>رمز عبور فعل</Label>
                    <Input
                        type='password'
                        className='mt-2'
                        value={currentPassword}
                        onChange={e=>setCurrentPassword(e.target.value)}
                    />
                </div>
                <div className="grid gap-4 sm:grid-cols-2 mt-2">
                    <div>
                        <Label>رمز عبور جدید</Label>
                        <Input
                            type='password'
                            className='mt-2'
                            value={newPassword}
                            onChange={e=>setNewPassword(e.target.value)}
                        />
                    </div>
                    <div>
                        <Label>تکرار رمز عبور</Label>
                        <Input
                            type='password'
                            className='mt-2'
                            value={confirmPassword}
                            onChange={e=>setConfirmPassword(e.target.value)}
                        />
                    </div>
                </div>
                <Button className='mt-4' type='submit'>تغییر رمزعبور</Button>
            </form>
        </div>
    </section>
  )
}

export default CustomerSettingSecurity