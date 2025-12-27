import { Badge } from '@components/UI/Badge';
import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { Eye } from 'lucide-react';
import React, { useState } from 'react';

const BranchOrderDetails:React.FC = ()=>{
    const [showModel,setShowModel] = useState<boolean>(false);
  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
        <DialogTrigger asChild >
            <Button variant='ghost' size='sm' aria-label='details'>
                <Eye className='h-4 w-4'/>
            </Button>
        </DialogTrigger>
        <DialogContent className='max-w-lg'>
            <DialogHeader>
                <DialogTitle>جزئیات سفارش   ORD-1766228790198</DialogTitle>
            </DialogHeader>
            <div className="my-4">
                <div className="grid grid-cols-2 gap-4 text-lg">
                    <div>
                        <span className="text-muted-foreground">مشتری :</span>
                        <p className="font-medium">علی احمدی</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">تلفن :</span>
                        <p className="font-medium" dir='ltr'>09123335588</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">تاریخ ثبت :</span>
                        <p className="font-medium">{new Date().toLocaleDateString('fa-IR')}</p>
                    </div>
                    <div>
                        <span className="text-muted-foreground">زمان تحویل :</span>
                        <p className="font-medium">۱۴۰۴/۹/۲۹ - 14:30</p>
                    </div>
                </div>
            </div>
            <div className="border-t border-border pt-4">
                <h4 className='font-bold mb-2'>آیتم های سفارش</h4>
                <div className="my-2">
                    <div className="flex items-center justify-between bg-muted/50 rounded-lg p-3">
                    <div>
                        <span className="font-medium">کاپوچینو</span>
                        <Badge variant='secondary'>
                            متوسط 
                        </Badge>
                        <span className="text-muted-foreground mr-2">{(2).toLocaleString('fa-IR')}</span>
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

export default BranchOrderDetails