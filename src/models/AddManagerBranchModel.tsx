import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { Input } from '@components/UI/Input';
import { Label } from '@components/UI/Label';
import { Coffee, Plus } from 'lucide-react';
import React, { useState } from 'react';
import { Formik } from 'formik';
import { useRegisterManager } from '@services/auth';
import { showError, showSuccess } from '@utils/Toasts';

const AddManagerBranchModel:React.FC =()=>{
    const registerManager = useRegisterManager()
    const [showModel , setShowModel]=useState(false);
  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
        <DialogTrigger asChild>
            <Button>
                <Plus className='h-4 w-4 ml-2'/>
                ایجاد مدیر شعبه
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-lg overflow-y-auto'>
            <DialogHeader>
                <DialogTitle className='flex items-center gap-3'>
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <Coffee className='h-6 w-6 text-primary'/>
                        </div>
                    ایجاد مدیر شعبه
                </DialogTitle>
            </DialogHeader>
            <Formik
                initialValues={{
                    username:"",
                    email:"",
                    phone:"",
                    password:""
                }}
                onSubmit={(values, {resetForm})=>{
                    registerManager.mutate(values,{
                        onSuccess:()=>{
                            showSuccess('ثبت نام با موفقیت انجام شد .')
                            resetForm();
                            setShowModel(false)
                        },
                        onError:(error:any)=>{
                            showError(error.message || 'مشکل به وجود آمد بعدا تلاش کنید.')
                        }
                    })
                }}
            >
                {({values ,  handleChange , handleSubmit})=>(
            <form  onSubmit={handleSubmit}>
                <div className="my-2">
                    <div className="my-2">
                        <Label>نام و نام خانوادگی</Label>
                        <Input placeholder='نام و نام خانوادگی وارد کنید'
                        type='text'
                            name='username'
                            value={values.username}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="my-2">
                        <Label>ایمیل</Label>
                        <Input placeholder='cafeNik@gmail.com'
                        type='email'
                            name='email'
                            value={values.email}
                            onChange={handleChange}                        
                        />
                    </div>
                    <div className="my-2">
                        <Label>شماره تلفن</Label>
                        <Input placeholder='09123334455'
                        type='text'
                            name='phone'
                            value={values.phone}
                            onChange={handleChange}                        
                        />
                    </div>
                    <div className="my-2">
                        <Label>رمز عبور</Label>
                        <Input placeholder='*******'
                            type='password'
                            name='password'
                            value={values.password}
                            onChange={handleChange}                        
                        />
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <Button variant='default' type='submit' disabled={registerManager.isPending} >
                        <Plus className='h-4 w-4 ml-2'/>
                        {registerManager.isPending ? "در حال ثبت نام  ..." :"افزودن"}
                    </Button>
                    <Button variant='outline' type='button' onClick={()=>setShowModel(false)}>خروج</Button>
                </div>
            </form>
                )}
            </Formik>

        </DialogContent>
    </Dialog>
  )
}

export default AddManagerBranchModel