import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog'
import { Input } from '@components/UI/Input';
import { useGetPickUpCode } from '@services/orders.services';
import { showError, showSuccess } from '@utils/Toasts';
import { CheckCircle, Package } from 'lucide-react';
import React, { useState } from 'react'
import { OrdersProps } from 'types/orders';

interface pickUpCodeProps{
    order:OrdersProps
}

const PickupCodeVerifyModel:React.FC<pickUpCodeProps> = ({order})=>{
    const getPickUpCode = useGetPickUpCode()
    const [showModel , setShowModel] = useState<boolean>(false);
    const [pickupCode , SetPickupCode] = useState('')

    const handleSendCode = (e:React.MouseEvent<HTMLButtonElement>)=>{
        e.preventDefault();
          if (!pickupCode.trim()) {
      showError("ابتدا کد تحویل را وارد کنید");
      return;
    }

        getPickUpCode.mutate(pickupCode,{
            onSuccess:()=>{
                showSuccess('کد شما تایید شد ');
                setShowModel(false)
            },
            onError:(error)=>{
                showError(error.message || 'کد تحویل نامعتبر است')
            }
        })
    }

  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
        <DialogTrigger asChild>
            <Button variant='outline' size='sm' className='text-green-600 border-green-200 hover:bg-green-50 hover:text-green-900 hover:border-green-900'>
                <Package className='h-4 w-4 ml-1'/>
                    تحویل
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-md'>
            <DialogHeader>
                <DialogTitle>
                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
                        <Package className='h-6 w-6 text-primary'/>
                    </div>
                    تایید تحویل سفارش
                </DialogTitle>
            </DialogHeader>
            <div className="space-y-6 py-4">
                {/* OrderInfo */}
                <div className="rounded-xl bg-secondary/30 p-4 space-y-2">
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">شماره سفارش :</span>
                        <span className="font-medium">ORD-{order?.id}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground"> محصول :</span>
                        <span className="font-medium">{order?.order_items?.map((od)=>(
                            od.menu.name
                        ))}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">مشتری :</span>
                        <span className="font-medium">{order?.user?.username}</span>
                    </div>
                    <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">مبلغ :</span>
                        <span className="font-medium">{order?.total_price?.toLocaleString('fa-IR')}</span>
                    </div>
                </div>
                {/* code input */}
                <div>
                    <p className="mb-3 text-center text-lg text-muted-foreground">
                        کد تحویل 6 رقمی مشتری را وارد کنید
                    </p>
                    <div className="flex justify-center gap-2">
                        <Input
                            type='text'
                            className={`h-12 w-full text-center text-2xl font-bold`}
                            value={pickupCode}
                            onChange={e=>SetPickupCode(e.target.value)}
                        />
                    </div>
                </div>
            </div>
            <DialogFooter className='gap-2'>
                <Button variant='destructive' onClick={()=>setShowModel(false)}>
                    انصراف
                </Button>
                <Button className="bg-green-600 hover:bg-green-700" disabled={pickupCode === ''}  onClick={handleSendCode}>
                    <CheckCircle className='ml-2 h-4 w-4'/>
                    {pickupCode === '' ? 'ابتدا کد وارد کنید':'برسی و تحویل سفارش'}
                </Button>
            </DialogFooter>
        </DialogContent>
    </Dialog>
  )
}

export default PickupCodeVerifyModel