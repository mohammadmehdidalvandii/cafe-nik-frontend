import { Button } from "@components/UI/Button";
import { Input } from "@components/UI/Input";
import { Label } from "@components/UI/Label";
import { useChangePassword } from "@services/auth";
import { showError, showSuccess } from "@utils/Toasts";
import { Shield } from "lucide-react";
import React, { useState } from "react";

const SettingSecurity: React.FC = () => {
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
                showSuccess('رمز عبور با موفقیت تغییر کرد');
                setCurrentPassword('')
                setNewPassword('')
                setConfirmPassword('')
            },
            onError:(error)=>{
                showError(error.message)
            }
        })
    }

  return (
    <div className="rounded-xl bg-white p-6 shadow-md">
      <div className="mb-4 flex items-center gap-3">
        <Shield className="h-5 w-5 text-primary" />
        <h3 className="text-2xl font-bold">امنیت</h3>
      </div>
      <div className="space-y-4">
        <form action="#" onSubmit={handleChangePassword}>
          <div>
            <Label htmlFor="current-password" className="text-lg mt-2">
              رمز عبور فعلی
            </Label>
            <Input id="current-password" type="password" className="mt-2"
              value={currentPassword}
              onChange={e=>setCurrentPassword(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="new-password" className="text-lg mt-2">
              رمز عبور جدید
            </Label>
            <Input id="new-password" type="password" className="mt-2" 
              value={newPassword}
              onChange={e=>setNewPassword(e.target.value)}
            />
          </div>
          <div>
            <Label htmlFor="new-password-re" className="text-lg mt-2">
               رمز عبور جدید تکرار
            </Label>
            <Input id="new-password-re" type="password" className="mt-2" 
              value={confirmPassword}
              onChange={e=>setConfirmPassword(e.target.value)}
            />
          </div>
          <Button className="w-full mt-8" type="submit">تغییر رمز عبور</Button>
        </form>
      </div>
    </div>
  );
};

export default SettingSecurity;
