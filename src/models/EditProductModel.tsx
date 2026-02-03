import { Button } from '@components/UI/Button';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@components/UI/Dialog';
import { Input } from '@components/UI/Input';
import { Label } from '@components/UI/Label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@components/UI/Select';
import { Switch } from '@components/UI/Switch';
import { Textarea } from '@components/UI/Textarea';
import { getAllCategories, useDeleteMenuProduct, useUpdateProductMenu } from '@services/menu.services';
import { Coffee, Edit2, Filter, Save } from 'lucide-react';
import React, { useState } from 'react'
import { ProductFormProps, ProductMenusProps } from 'types/menu';
import swal from 'sweetalert';
import { showError, showSuccess } from '@utils/Toasts';

interface productData {
    product:ProductMenusProps,
}

const EditProductModel:React.FC<productData> = ({product})=>{
    const deleteMenuProduct = useDeleteMenuProduct();
    const updateProductMenu = useUpdateProductMenu();
    const {data} = getAllCategories()
    const initialForm = {
  name: product.name,
  description: product.description,
  category_id: product.category_id,
  base_price: product.base_price,
  size: product.size,
};
    const [showModel, setShowModel] = useState<boolean>(false);
    const [hasSize, setHasSize] = useState<boolean>(product.size !== null ? true : false);
    const [form , setForm] = useState<ProductFormProps>({
      id:product.id,
      name:product.name,
      description:product.description,
      category_id:product.category_id,
      base_price:product.base_price ,
      size:product.size ? {
        small: Number(product.size.small??""),
        medium: Number(product.size.medium?? ""),
        large: Number(product.size.large?? ""),
      }:null,
      category_product:product.categoryProduct.name,
    });



    const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
      const {name , value} = e.target;
      setForm(prev => ({...prev , [name]:value}));
    }
    const handlerSizeChange = (
      key:'small'|'medium'|'large',
      value:string
    )=>{
      setForm(prev=>({
        ...prev,
        size:{
          ...(prev.size || {}),
          [key]:value ? Number(value) : undefined
        }
      }))
    }

  const toggleSize = ()=>{
    setHasSize(prev => !prev);
    setForm(prev => ({
      ...prev,
      size:hasSize ? null :{},
      base_price: hasSize ? prev.base_price : null
    }))
  }

  // update
  const handleUpdateProductMenu = (e:React.FocusEvent<HTMLFormElement>)=>{
    e.preventDefault();

    const updatedFields:Partial<ProductFormProps> ={
      id:form.id,
    }
  if (form.name !== initialForm.name) {
    updatedFields.name = form.name;
  }

  if (form.description !== initialForm.description) {
    updatedFields.description = form.description;
  }

  if (form.category_id !== initialForm.category_id) {
    updatedFields.category_id = form.category_id;
  }

  if (!hasSize && form.base_price !== initialForm.base_price) {
    updatedFields.base_price = form.base_price;
  }

  if (hasSize) {
    if (
      JSON.stringify(form.size) !== JSON.stringify(initialForm.size)
    ) {
      updatedFields.size = form.size;
      updatedFields.base_price = null; // وقتی سایز داره
    }
  }

  if (Object.keys(updatedFields).length === 1) {
    showError('هیچ تغییری انجام نشده');
    return;
  }


    updateProductMenu.mutate(updatedFields,{
        onSuccess:()=>{
          showSuccess('تغییرات محصول با موفقیت اعمال شد');
            setShowModel(false)
        },
        onError:(error)=>{
          showError(error.message || 'تغییرات محصول با خطا مواجه شد')
        }
    })
  }

    // Delete menu Product
    const handleDeleteMenu = (menuID:string)=>{
        swal({
          title:'آیا از حذف محصول اطمینان دارید ؟',
          text:'درصورت حذف محصول غیرقابل بازگشت هست',
          buttons:['نه','بله']
        }).then((result)=>{
          if(result){
            deleteMenuProduct.mutate(menuID,{
              onSuccess:()=>{
                showSuccess('محصول مورد نظر با موفقیت حذف شد');
              },
              onError:(error)=>{
                showError( error.message ||'حذف محصول با مشکل برخورد دوباره تلاش کنید')
              }
            })
          }
        })
    }

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
        <form action="#" onSubmit={handleUpdateProductMenu}>
          <div className="my-2">
            <div className="my-2">
              <Label>نام محصول *</Label>
              <Input placeholder="مثال : اسپرسو دوبل" 
                name='name'
                value={form.name}
                onChange={handleChange}
              />
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
                  onCheckedChange={toggleSize}
                />
              </div>
            </div>
            <div className={`grid gap-4 ${hasSize ? "" : "sm:grid-cols-2"}`}>
              <div className="my-2">
                <Label>دسته بندی *</Label>
                <Select value={form.category_id} onValueChange={(value)=>setForm(prev =>({...prev , category_id:value}))}>
                  <SelectTrigger className="w-full">
                    <Filter className="ml-2 h-4 w-4" />
                    <SelectValue placeholder="فیلتر دسته بندی" />
                  </SelectTrigger>
                  <SelectContent>
                    {data?.map((category:any)=>(
                      <SelectItem key={category.id} value={category.id}>{category.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
              {!hasSize && 
              <div className="my-2">
                <Label>قیمت پایه (تومان) *</Label>
                <Input value={form?.base_price || ""} 
                  name='base_price'
                  onChange={(e)=>setForm(prev =>({
                    ...prev , base_price:e.target.value ? Number(e.target.value) :null
                  }))}
                />
              </div>
              }
            </div>
              {hasSize && (
                <div className="rounded-xl border border-border/50 bg-muted/30 p-4 my-4">
                  <p className="text-lg font-medium text-muted-foreground">
                    قیمت سایز ها (تومان)
                  </p>
                  <div className="grid gap-4 sm:grid-cols-3">
                    <div className="my-2">
                      <Label>کوچک *</Label>
                      <Input type="number" placeholder="25000" dir="ltr"  
                        value={form.size?.small}
                        onChange={(e)=>handlerSizeChange('small',e.target.value)}
                      />
                    </div>
                    <div className="my-2">
                      <Label>متوسط *</Label>
                      <Input type="number" placeholder="350000" dir="ltr"  
                        value={form.size?.medium}
                        onChange={(e)=>handlerSizeChange('medium',e.target.value)}
                      />
                    </div>
                    <div className="my-2">
                      <Label>بزرگ *</Label>
                      <Input type="number" placeholder="45000" dir="ltr"  
                        value={form.size?.large}
                        onChange={(e)=>handlerSizeChange('large',e.target.value)}
                      />
                    </div>
                  </div>
                </div>
              )}
            <div className="my-2">
              <Label>توضیجات *</Label>
              <Textarea placeholder="توضیحات محصول" 
                name='description'
                value={form.description} 
                onChange={handleChange}
              />
            </div>

          </div>
          <div className="mt-4">
            <div className="flex items-center justify-between">
                <Button variant="destructive" type='button' onClick={()=>form.id && handleDeleteMenu(form.id)}>حذف</Button>
                <div className="flex gap-4">
                    <Button variant="outline" onClick={()=>(setShowModel(false))}>انصراف</Button>
                    <Button variant="default" type='submit'>
                      <Save className="h-4 w-4 ml-2" />
                      ویرایش
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