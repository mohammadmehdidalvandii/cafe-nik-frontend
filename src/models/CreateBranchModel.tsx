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

const CreateBranchModel: React.FC = () => {
  
  const [showModel, setShowModel] = useState<boolean>(false);
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
          <form action="#">
            <div className="grid gap-4 sm:grid-cols-2 mt-2">
              <div className="space-y-2">
                <Label>نام شعبه *</Label>
                <Input 
                    placeholder="مثال : شعبه ونک"
                />
              </div>
              <div className="space-y-2">
                <Label>شهر *</Label>
                <Input 
                    placeholder="مثال : تهران"
                />
              </div>
            </div>
            <div className="space-y-2 mt-2">
              <Label>آدرس کامل *</Label>
              <Input 
                placeholder="آدرس کامل شعبه ..."
              />
            </div>
            <div className="space-y-2 mt-2">
                <Select>
              <Label> انتحاب مدیر شعبه *</Label>
                  <SelectTrigger>
                      <User className="ml-2 h-4 w-4"/>
                      <SelectValue placeholder='مدیرشعبه '/>
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All">انتخاب مدیر</SelectItem>
                    <SelectItem value="156165165">محمدی</SelectItem>
                  </SelectContent>
                </Select>
            </div>
            <div className="grid gap-4 sm:grid-cols-2 mt-2">
              <div className="space-y-2">
                <Label>شماره تماس *</Label>
                <Input 
                    placeholder="021- 12365477"
                    dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <Label>ساعت کاری *</Label>
                <Input 
                    placeholder="8:00 - 22:00"
                />
              </div>
            </div>
            <div className="flex items-center gap-4 mt-4">
                <Button variant='destructive' type="button" onClick={()=>setShowModel(false)}>انصراف</Button>
                <Button>
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
