import { Button } from "@components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/UI/Dialog";
import { Input } from "@components/UI/Input";
import { Label } from "@components/UI/Label";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem
} from "@components/UI/Select";
import { Switch } from "@components/UI/Switch";
import { Textarea } from "@components/UI/Textarea";
import { getAllCategories, useCreateProductMenu } from "@services/menu.services";
import { showError, showSuccess } from "@utils/Toasts";
import { Coffee, Filter, Plus } from "lucide-react";
import React, { useState } from "react";
import { ProductFormProps } from "types/menu";

const CreateProductModel: React.FC = () => {
  const createMenuProduct = useCreateProductMenu();
  const {data} = getAllCategories();
  const [showModel, setShowModel] = useState<boolean>(false);
  const [hasSize, setHasSize] = useState<boolean>(false);
  const [formData , setFormData] = useState<ProductFormProps>({
    name:"",
    description:"",
    category_id:"all",
    base_price:null,
    size:null,
  });


  const handleChange = (e:React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>)=>{
    const {name ,  value} = e.target
    setFormData(prev => ({...prev , [name]:value}));
  }

  const handlerBasePrice = (e:React.ChangeEvent<HTMLInputElement>)=>{
    setFormData(prev => ({
      ...prev,
      base_price:e.target.value ? Number(e.target.value):null
    }))
  }

  const handleSizeChange = (
    key:'small'|'medium'|'large',
    value:string,
  )=>{
    setFormData(prev => ({
      ...prev,
      size:{
        ...(prev.size || {}),
        [key]:value ? Number(value) :undefined
      }
    }))
  }

  const toggleSize = ()=>{
    setHasSize(prev => !prev);
    setFormData(prev => ({
      ...prev,
      size:hasSize ? null :{},
      base_price: hasSize ? prev.base_price : null
    }))
  }


  const handleForm = (e:React.FormEvent<HTMLFormElement>)=>{
    e.preventDefault();
    createMenuProduct.mutate(formData ,{
      onSuccess:()=>{
        showSuccess('محصول جدید با موفقیت ساخت شد')
        setShowModel(false);
        setFormData({
        name:"",
        description:"",
        category_id:"all",
        base_price:null,
        size:null,
        })
      },
      onError:(error)=>{
        showError(error.message)
      }
    })
  }

  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 ml-2" />
          افزودن محصول
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg max-h-[550px] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Coffee className="h-6 w-6 text-primary" />
            </div>
            افزودن محصول
          </DialogTitle>
        </DialogHeader>
        <form action="#" onSubmit={handleForm}>
          <div className="my-2">
            <div className="my-2">
              <Label>نام محصول *</Label>
              <Input placeholder="مثال : اسپرسو دوبل" 
                name="name"
                value={formData.name}
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
            <div className={`grid gap-4 ${hasSize ? "grid-cols-1" : "sm:grid-cols-2"}`}>
              <div className="my-2">
                <Label>دسته بندی *</Label>
                <Select value={formData.category_id} onValueChange={(value)=>setFormData(prev =>({...prev , category_id:value}))}>
                  <SelectTrigger>
                    <Filter className="ml-2 h-4 w-4" />
                    <SelectValue placeholder="فیلتر دسته بندی" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem dir="rtl" value='all'>همه دسته بندی</SelectItem>
                    {data?.map((category:any)=>(
                      <SelectItem  dir="rtl" value={category.id} key={category.id}>{category.name}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
              </div>
                {!hasSize &&         
                <div className="my-2">
                <Label>قیمت پایه (تومان) *</Label>
                <Input 
                  type="number"
                  onChange={handlerBasePrice}
                />
              </div>}
            </div>
            <div className="my-2">
              <Label>توضیجات *</Label>
              <Textarea placeholder="توضیحات محصول" 
              name="description"
                value={formData.description}
                onChange={handleChange}
              />
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
                      onChange={(e)=>handleSizeChange('small', e.target.value)}
                    />
                  </div>
                  <div className="my-2">
                    <Label>متوسط *</Label>
                    <Input type="number" placeholder="350000" dir="ltr" 
                      onChange={(e)=>handleSizeChange('medium', e.target.value)}
                    />
                  </div>
                  <div className="my-2">
                    <Label>بزرگ *</Label>
                    <Input type="number" placeholder="45000" dir="ltr" 
                      onChange={(e)=>handleSizeChange('large', e.target.value)}
                    />
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="mt-4">
            <div className="flex gap-4">
              <Button variant="default" type="submit">
                <Plus className="h-4 w-4 ml-2" />
                افزودن
              </Button>
              <Button variant="outline" type="button" onClick={()=>{setShowModel(false)}}>انصراف</Button>
            </div>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default CreateProductModel;
