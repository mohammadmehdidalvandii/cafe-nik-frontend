import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { Check, X } from 'lucide-react'
import React from 'react'

const BranchEditForm:React.FC = ()=>{
  return (
                            <form action="#" className="mt-4">
                            <div className="grid gap-4 sm:grid-cols-2">
                                <div className="my-2">
                                    <Label>نام شعبه</Label>
                                    <Input/>
                                </div>
                                <div className="my-2">
                                    <Label>شهر</Label>
                                    <Input/>
                                </div>
                                <div className="my-2 sm:col-span-2">
                                    <Label>آدرس</Label>
                                    <Input/>
                                </div>
                                <div className="my-2">
                                    <Label>تلفن</Label>
                                    <Input/>
                                </div>
                                <div className="my-2">
                                    <Label>ساعت کاری</Label>
                                    <Input/>
                                </div>
                            </div>
                            <div className="flex gap-3 mt-4">
                                <Button variant='outline'>
                                    <X className='h-4 w-4 ml-2'/>
                                    انصراف
                                </Button>
                                <Button variant='default'>
                                    <Check className='h-4 w-4 ml-2'/>
                                    ذخیره تغییرات
                                </Button>
                            </div>
                        </form>
  )
}

export default BranchEditForm