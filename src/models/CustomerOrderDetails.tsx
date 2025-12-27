import { Badge } from '@components/UI/Badge';
import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { Copy, Eye } from 'lucide-react';
import React, { useState } from 'react';

const CustomerOrderDetails:React.FC = ()=>{
    const [showModel , setShowModel] = useState<boolean>(false);
  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
        <DialogTrigger asChild>
            <Button variant='ghost' size='sm' aria-label='details order'>
                <Eye className='h-4 w-4'/>
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-lg'>
            <DialogHeader>
                <DialogTitle>جزئیات سفارش ORD-1766228790198</DialogTitle>
            </DialogHeader>
            <div className="my-2">
                <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>
                        <span className="text-muted-foreground">شعبه</span>
                        <p className="font-medium">ونک</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">وضعیت</span>
                        <p className="font-medium">
                            <Badge variant='secondary'>
                                آماده تحویل
                            </Badge>
                        </p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">تاریخ ثبت :</span>
                        <p className="font-medium">{new Date().toLocaleString('fa-IR')}</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">زمان تحویل</span>
                        <p className="font-medium">۱۴۰۴/۹/۲۹ - 14:30</p>
                    </div>
                </div>
            </div>
            {/* pickUpCode */}
            <div className="p-4 bg-primary/10 rounded-xl border border-primary/20 text-center">
                <p className="text-sm text-muted-foreground mb-1">کد تحویل</p>
                <p className="text-2xl font-bold text-primary tracking-[0.3rem]">
                    327134
                </p>
                <Button variant='ghost'
                    size='sm'
                    className='mt-2'
                >
                    <Copy className='h-4 w-4 ml-2'/>
                    کپی کد
                </Button>
            </div>

            <div className="border-t border-border p-4 ">
                <h4 className="font-bold mb-2">آیتم های سفارش</h4>
                <div className="my-2">
                    <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                        <div>
                            <span className="font-medium">کاپوچینو</span>
                            <Badge variant='secondary'>متوسط</Badge>
                            <span className='text-muted-foreground mr-2'>x {(2).toLocaleString('fa-IR')}</span>
                        </div>
                        <span className="font-bold">
                            {(169000).toLocaleString('fa-IR')} تومان
                        </span>
                    </div>
                </div>
            </div>
            <div className="border-t border-border pt-4 flex justify-between items-center">
                <span className="font-bold">مجموع :</span>
                <span className="text-xl font-bold text-copper">
                    {(169000).toLocaleString('fa-IR')} تومان 
                </span>
            </div>
        </DialogContent>
    </Dialog>
  )
}

export default CustomerOrderDetails