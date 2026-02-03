import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { Input } from '@components/UI/Input';
import { Label } from '@components/UI/Label';
import { Coffee, Plus } from 'lucide-react';
import React, { useState } from 'react';

const AddManagerBranchModel:React.FC =()=>{
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
            <form action="#">
                <div className="my-2">
                    <div className="my-2">
                        <Label>نام و نام خانوادگی</Label>
                        <Input placeholder='نام و نام خانوادگی وارد کنید'/>
                    </div>
                    <div className="my-2">
                        <Label>ایمیل</Label>
                        <Input placeholder='cafeNik@gmail.com'/>
                    </div>
                    <div className="my-2">
                        <Label>شماره تلفن</Label>
                        <Input placeholder='09123334455'/>
                    </div>
                    <div className="my-2">
                        <Label>رمز عبور</Label>
                        <Input placeholder='*******'/>
                    </div>
                </div>
                <div className="flex items-center gap-4 mt-4">
                    <Button variant='default' type='submit'>
                        <Plus className='h-4 w-4 ml-2'/>
                        افزودن
                    </Button>
                    <Button variant='outline' type='button' onClick={()=>setShowModel(false)}>خروج</Button>
                </div>
            </form>
        </DialogContent>
    </Dialog>
  )
}

export default AddManagerBranchModel