import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { Input } from '@components/UI/Input';
import { Label } from '@components/UI/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select';
import { Switch } from '@components/UI/Switch';
import { Textarea } from '@components/UI/Textarea';
import { Coffee, Edit2, Filter, Save } from 'lucide-react';
import React, { useState } from 'react'

const EditProductModel:React.FC = ()=>{
    const [showModel, setShowModel] = useState<boolean>(false);
    const [hasSize, setHasSize] = useState<boolean>(false);
  return (
       <Dialog open={showModel} onOpenChange={setShowModel}>
      <DialogTrigger asChild>
        <Button variant='ghost' size='sm'>
            <Edit2 className='h-4 w-4 ml-1'/>
            ویرایش
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[550px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            ویرایش محصول
          </DialogTitle>
        </DialogHeader>
        <form action="#">
          <div className="my-2">
            <div className="my-2">
              <Label>نام محصول *</Label>
              <Input placeholder="مثال : اسپرسو دوبل" />
            </div>
            <div className={`grid gap-4 ${hasSize ? "" : "sm:grid-cols-2"}`}>
              <div className="my-2">
                <Label>دسته بندی *</Label>
                <Select>
                  <SelectTrigger className="w-full">
                    <Filter className="ml-2 h-4 w-4" />
                    <SelectValue placeholder="فیلتر دسته بندی" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">همه دسته بندی</SelectItem>
                    <SelectItem value="all">قهوه</SelectItem>
                    <SelectItem value="all">چای و دمنوش</SelectItem>
                    <SelectItem value="all">نوشیدنی سرد</SelectItem>
                    <SelectItem value="all">غذا</SelectItem>
                    <SelectItem value="all">دسر</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="my-2">
                <Label>قیمت پایه (تومان) *</Label>
                <Input />
              </div>
            </div>
            <div className="my-2">
              <Label>توضیجات *</Label>
              <Textarea placeholder="توضیحات محصول" />
            </div>
            <div className="my-4">
              <div className="flex items-center justify-between rounded-xl bg-secondary/30 p-4">
                <div>
                  <p className="font-medium text-xl">سایز بندی</p>
                  <p className="text-lg text-muted-foreground">
                    آیا این محصول در سایز های مختلف موجود است ؟
                  </p>
                </div>
                <Switch
                  checked={hasSize}
                  onCheckedChange={() => setHasSize(!hasSize)}
                />
              </div>
            </div>
            {hasSize && (
              <div className="rounded-xl border border-border/50 bg-muted/30 p-4 my-4">
                <p className="text-lg font-medium text-muted-foreground">
                  قیمت سایز ها (تومان)
                </p>
                <div className="grid gap-4 sm:grid-cols-3">
                  <div className="my-2">
                    <Label>کوچک *</Label>
                    <Input type="number" placeholder="25000" dir="ltr" />
                  </div>
                  <div className="my-2">
                    <Label>متوسط *</Label>
                    <Input type="number" placeholder="350000" dir="ltr" />
                  </div>
                  <div className="my-2">
                    <Label>بزرگ *</Label>
                    <Input type="number" placeholder="45000" dir="ltr" />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
                <Button variant="destructive">حذف</Button>
                <div className="flex gap-4">
                    <Button variant="outline">انصراف</Button>
                    <Button variant="default">
                      <Save className="h-4 w-4 ml-2" />
                      افزودن
                    </Button>
                </div>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog> 
  )
}

export default EditProductModel