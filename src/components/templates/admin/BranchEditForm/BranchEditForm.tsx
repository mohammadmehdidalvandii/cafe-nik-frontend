import { Button } from '@components/UI/Button'
import { Input } from '@components/UI/Input'
import { Label } from '@components/UI/Label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select'
import { UseGetAllCities, useUpdateBranch } from '@services/branch.services'
import { showError, showSuccess } from '@utils/Toasts'
import { Check, Home, X } from 'lucide-react'
import React, { useState } from 'react'
import { BranchesProps } from 'types/branch'

interface BranchEditProps{
    branch:BranchesProps,
}

const BranchEditForm:React.FC<BranchEditProps> = ({branch})=>{
      const {data:cities} = UseGetAllCities();
    const updateBranch = useUpdateBranch();
    const initialForm = {
        name:branch.name,
        city_id:branch.city_id,
        address:branch.address,
        phone:branch.phone,

    }
    const [formData , setFormData] = useState({
        name:branch.name,
        city_id:branch.city_id,
        address:branch.address,
        phone:branch.phone, 
    });


    const handlerChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
        const {name , value} = e.target;
        setFormData(prev => ({...prev , [name]:value}))
    };

    const handlerUpdateBranch = (e:React.FocusEvent<HTMLFormElement>)=>{
        e.preventDefault();
        const updatedFields:Partial<BranchesProps>={
            id:branch.id,
        };

        if(formData.name !== initialForm.name){
            updatedFields.name = formData.name
        };

        if(formData.city_id !== initialForm.city_id){
            updatedFields.city_id = formData.city_id
        };
        if(formData.address !== initialForm.address){
            updatedFields.address = formData.address
        };
        if(formData.phone !== initialForm.phone){
            updatedFields.phone = formData.phone
        };

        if(Object.keys(updatedFields).length === 1){
            showError('هیج تغییری انجام نشده است');
            return
        };
        updateBranch.mutate(updatedFields ,{
            onSuccess:()=>{
                showSuccess('تغییرات موفقیت آمیز بود');
            },
            onError:(error)=>{
                showError(error.message)
            }
        })

    }

  return (
        <form action="#" className="mt-4" onSubmit={handlerUpdateBranch}>
        <div className="grid gap-4 sm:grid-cols-2">
            <div className="my-2">
                <Label>نام شعبه</Label>
                <Input name='name' value={formData.name} onChange={handlerChange}/>
            </div>
            <div className="my-2">
                <Label>شهر</Label>
                <Select value={formData.city_id}
                  onValueChange={(value)=>setFormData(prev => ({...prev , city_id:value}))}
                >
                  <SelectTrigger>
                      <Home className="ml-2 h-4 w-4"/>
                      <SelectValue placeholder='اتخاب شهر '/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">انتخاب شهر </SelectItem>
                    {cities?.map((city:any)=>(
                      <SelectItem value={city.id} key={city.id}>{city.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
            </div>
            <div className="my-2 sm:col-span-2">
                <Label>آدرس</Label>
                <Input name='address' value={formData.address} onChange={handlerChange}/>
            </div>
            <div className="my-2">
                <Label>تلفن</Label>
                <Input name='phone' value={formData.phone} onChange={handlerChange}/>
            </div>
        </div>
        <div className="flex gap-3 mt-4">
            <Button variant='default' type='submit'>
                <Check className='h-4 w-4 ml-2'/>
                ذخیره تغییرات
            </Button>
        </div>
    </form>
  )
}

export default BranchEditForm