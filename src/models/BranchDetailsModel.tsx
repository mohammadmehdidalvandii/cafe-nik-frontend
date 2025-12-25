import BranchEditForm from '@components/templates/admin/BranchEditForm/BranchEditForm';
import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { Clock, Edit2, Eye, MapPin, Phone, ShoppingBag, TrendingUp } from 'lucide-react';
import React, { useState } from 'react';

const BranchDetailsModel:React.FC = ()=>{
    const [showModel , setShowModel] = useState<boolean>(false);
    const [isEditing , setIsEditing] = useState<boolean>(false);
  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
        <DialogTrigger asChild>
            <Button variant="ghost" size="sm">
              <Eye className="h-4 w-4 ml-1" />
              جزئیات
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-2xl'>
            <DialogHeader>
                <DialogTitle className='flex items-center justify-between'>
                    <div className="flex items-center gap-3">
                        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                            <MapPin className='h-6 w-6 text-primary'/>
                        </div>
                        {isEditing ? "ویراش شعبه":"جزئیات شعبه"}
                    </div>
                    {!isEditing && (
                    <Button variant='outline' size='sm'
                        onClick={()=>setIsEditing(true)}
                    >
                        <Edit2 className='h-4 w-4 ml-2'/>
                        ویرایش
                    </Button>
                    )}
                </DialogTitle>
            </DialogHeader>
            <div className="my-4">
                {/* stats */}
                <div className="grid gap-4 sm:grid-cols-3">
                    <div className="rounded-xl bg-green-50 p-4 text-center">
                        <TrendingUp className='h-6 w-6 text-green-600 mx-auto mb-2'/>
                        <p className="text-xl text-muted-foreground">درآمد</p>
                        <p className="font-bold text-lg text-green-700">{(98000).toLocaleString('fa-IR')} تومان</p>
                    </div>
                    <div className="rounded-xl bg-blue-50 p-4 text-center">
                        <ShoppingBag className='h-6 w-6 text-blue-600 mx-auto mb-2'/>
                        <p className="text-xl text-muted-foreground">کل سفارش ها</p>
                        <p className="font-bold text-lg text-blue-700">{(5).toLocaleString('fa-IR')} تومان</p>
                    </div>
                    <div className="rounded-xl bg-yellow-50 p-4 text-center">
                        <Clock className='h-6 w-6 text-yellow-600 mx-auto mb-2'/>
                        <p className="text-xl text-muted-foreground">در انتظار</p>
                        <p className="font-bold text-lg text-yellow-700">{(15).toLocaleString('fa-IR')} تومان</p>
                    </div>
                </div>
                {isEditing ? (
                    <BranchEditForm/>
                ) : (
                    <>
                                        <div className="grid gap-4 sm:grid-cols-2 mt-4">
                    <div className="rounded-xl bg-secondary/30 p-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <MapPin className='h-4 w-4'/>
                            <span className="text-sm">نام شعبه</span>
                        </div>
                        <p className="font-bold">ونک</p>
                    </div>
                    <div className="rounded-xl bg-secondary/30 p-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <span className="text-sm">شهر</span>
                        </div>
                        <p className="font-bold">تهران</p>
                    </div>
                    <div className="rounded-xl bg-secondary/30 p-4 sm:col-span-2">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <span className="text-sm">آدرس</span>
                        </div>
                        <p className="font-bold">خیابان ونک، نبش کوچه ۱۲</p>
                    </div>
                    <div className="rounded-xl bg-secondary/30 p-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Phone className='h-4 w-4'/>
                            <span className="text-sm" dir='ltr'>تلفن</span>
                        </div>
                        <p className="font-bold">021-88776655</p>
                    </div>
                    <div className="rounded-xl bg-secondary/30 p-4">
                        <div className="flex items-center gap-2 text-muted-foreground mb-1">
                            <Clock className='h-4 w-4'/>
                            <span className="text-sm">ساعت کاری</span>
                        </div>
                        <p className="font-bold">۸ صبح تا ۱۱ شب</p>
                    </div>
                </div>
                    </>
                )}
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default BranchDetailsModel