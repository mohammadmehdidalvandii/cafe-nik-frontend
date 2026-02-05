import { Button } from "@components/UI/Button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@components/UI/Dialog";
import { Input } from "@components/UI/Input";
import { Label } from "@radix-ui/react-label";
import { MapPin, Plus, User } from "lucide-react";
import React, { useState } from "react";
import {
  Select,
  SelectContent,
  SelectTrigger,
  SelectValue,
  SelectItem
} from "@components/UI/Select";
import { useCreateBranch, UseGetAllCities, UseGetAllUsersBranch } from "@services/branch.services";
import { useAuthStore } from "@store/authStore";
import { BranchCreateProps } from "types/branch";
import { showError, showSuccess } from "@utils/Toasts";

const CreateBranchModel: React.FC = () => {
  const {data} = UseGetAllUsersBranch();
  const createBranch = useCreateBranch();
  const {data:cities} = UseGetAllCities();
  const [showModel, setShowModel] = useState<boolean>(false);
  const [formData , setFormData] = useState<BranchCreateProps>({
    name:'',
    country:'ایران',
    city_id:'',
    address:'',
    users_id:'',
    phone:''
  });

  const handleChange = (e:React.ChangeEvent<HTMLInputElement>)=>{
    const {name , value} = e.target;
    setFormData(prev =>({...prev , [name]:value}));
  };

  const handlerCreateBranch = (e:React.FormEvent<HTMLFormElement>)=>{
        e.preventDefault();
        createBranch.mutate(formData,{
            onSuccess:()=>{
              showSuccess('شعبه جدید با موفقیت ایجاد شد');
              setFormData({
                name:'',
                country:'ایران',
                city_id:'',
                address:'',
                users_id:'',
                phone:''
              });
              setShowModel(false)
            },
            onError:(error)=>{
              showError(error.message || 'ایجاد شعبه با خطا مواجه شد')
            }
        })
  }

  return (
    <Dialog open={showModel} onOpenChange={setShowModel}>
      <DialogTrigger asChild>
        <Button>
          <Plus className="h-4 w-4 ml-2" />
          شعبه جدید
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-lg">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <MapPin className="h-6 w-6 text-primary" />
            </div>
            ایجاد شعبه جدید
          </DialogTitle>
        </DialogHeader>
        <div className="space-y-4">
          <form action="#" onSubmit={handlerCreateBranch}>
            <div className="grid gap-4 sm:grid-cols-2 mt-2">
              <div className="space-y-2">
                <Label>نام شعبه *</Label>
                <Input 
                    placeholder="مثال : شعبه ونک"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label>شهر *</Label>
                <Select value={formData.city_id}
                  onValueChange={(value)=>setFormData(prev => ({...prev , city_id:value}))}
                >
                  <SelectTrigger>
                      <User className="ml-2 h-4 w-4"/>
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
            </div>
            <div className="space-y-2 mt-2">
              <Label>آدرس کامل *</Label>
              <Input 
                placeholder="آدرس کامل شعبه ..."
                name="address"
                value={formData.address}
                onChange={handleChange}
              />
            </div>
            <div className="space-y-2 mt-2">
                <Select value={formData.users_id}
                  onValueChange={(value)=>setFormData(prev => ({...prev, users_id:value}))}
                >
              <Label> انتحاب مدیر شعبه *</Label>
                  <SelectTrigger>
                      <User className="ml-2 h-4 w-4"/>
                      <SelectValue placeholder='مدیرشعبه '/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">انتخاب مدیر</SelectItem>
                    {data?.map((user:any)=>(
                      <SelectItem value={user.id} key={user.id}>{user.username}-{user.phone}</SelectItem>
                    ))}
                  </SelectContent>
                </Select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mt-2">
              <div className="space-y-2">
                <Label>شماره تماس *</Label>
                <Input 
                    placeholder="021- 12365477"
                    dir="ltr"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                />
              </div>
              <div className="space-y-2">
                <Label>ساعت کاری *</Label>
                <Input 
                    placeholder="8:00 - 22:00"
                    value='8 صبح تا 23شب'
                    disabled
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Button variant='destructive' type="button" onClick={()=>setShowModel(false)}>انصراف</Button>
                <Button type="submit">
                    <Plus className="h-4 w-4 ml-1"/>
                    ایجاد شعبه
                </Button>
            </div>
          </form>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBranchModel;
