import { cn } from '@utils/cn';
import { Clock, MapPin, Phone } from 'lucide-react';
import React, { useState } from 'react';

const BranchItems:React.FC = ()=>{
    const [selectedCity , setSelectCity] = useState<string | null>(null);
  return (
    <section className='py-10'>
        <div className="container px-8 md:px-16">
            {/* Filter */}
            <div className="flex flex-wrap gap-2 mb-8">
                <button className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                    !selectedCity?'bg-primary text-primary-foreground':
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}>
                    همه شهرها
                </button>
                <button className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                    !selectedCity?'bg-primary text-primary-foreground':
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}>
                    همه شهرها
                </button>
                <button className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                    !selectedCity?'bg-primary text-primary-foreground':
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}>
                    همه شهرها
                </button>
                <button className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                    !selectedCity?'bg-primary text-primary-foreground':
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}>
                    همه شهرها
                </button>
                <button className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                    !selectedCity?'bg-primary text-primary-foreground':
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}>
                    همه شهرها
                </button>
                <button className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                    !selectedCity?'bg-primary text-primary-foreground':
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}>
                    همه شهرها
                </button>
                <button className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                    !selectedCity?'bg-primary text-primary-foreground':
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}>
                    همه شهرها
                </button>
                <button className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                    !selectedCity?'bg-primary text-primary-foreground':
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}>
                    همه شهرها
                </button>
                <button className={cn(
                    'rounded-full px-4 py-1.5 text-sm transition-colors cursor-pointer',
                    !selectedCity?'bg-primary text-primary-foreground':
                    'bg-secondary text-secondary-foreground hover:bg-secondary/80'
                )}>
                    همه شهرها
                </button>
            </div>
            {/* Branches grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-xl font-sansBold font-black">شعبه ونک</h3>
                        <span className="rounded-full bg-secondary px-3 py-1 text-[0.9rem] text-secondary-foreground">تهران</span>
                    </div>
                    <div className="space-y-3 text-lg">
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className='mt-0.5 h-4 w-4 shrink-0'/>
                            <span>خیابان ونک نبش کوچه 12</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Phone className='h-4 w-4 shrink-0'/>
                            <span dir='ltr'>021-88776655</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Clock className='h-4 w-4 shrink-0'/>
                            <span>8 صبح تا 11 شب</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-xl font-sansBold font-black">شعبه ونک</h3>
                        <span className="rounded-full bg-secondary px-3 py-1 text-[0.9rem] text-secondary-foreground">تهران</span>
                    </div>
                    <div className="space-y-3 text-lg">
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className='mt-0.5 h-4 w-4 shrink-0'/>
                            <span>خیابان ونک نبش کوچه 12</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Phone className='h-4 w-4 shrink-0'/>
                            <span dir='ltr'>021-88776655</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Clock className='h-4 w-4 shrink-0'/>
                            <span>8 صبح تا 11 شب</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-xl font-sansBold font-black">شعبه ونک</h3>
                        <span className="rounded-full bg-secondary px-3 py-1 text-[0.9rem] text-secondary-foreground">تهران</span>
                    </div>
                    <div className="space-y-3 text-lg">
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className='mt-0.5 h-4 w-4 shrink-0'/>
                            <span>خیابان ونک نبش کوچه 12</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Phone className='h-4 w-4 shrink-0'/>
                            <span dir='ltr'>021-88776655</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Clock className='h-4 w-4 shrink-0'/>
                            <span>8 صبح تا 11 شب</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-xl font-sansBold font-black">شعبه ونک</h3>
                        <span className="rounded-full bg-secondary px-3 py-1 text-[0.9rem] text-secondary-foreground">تهران</span>
                    </div>
                    <div className="space-y-3 text-lg">
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className='mt-0.5 h-4 w-4 shrink-0'/>
                            <span>خیابان ونک نبش کوچه 12</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Phone className='h-4 w-4 shrink-0'/>
                            <span dir='ltr'>021-88776655</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Clock className='h-4 w-4 shrink-0'/>
                            <span>8 صبح تا 11 شب</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-xl font-sansBold font-black">شعبه ونک</h3>
                        <span className="rounded-full bg-secondary px-3 py-1 text-[0.9rem] text-secondary-foreground">تهران</span>
                    </div>
                    <div className="space-y-3 text-lg">
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className='mt-0.5 h-4 w-4 shrink-0'/>
                            <span>خیابان ونک نبش کوچه 12</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Phone className='h-4 w-4 shrink-0'/>
                            <span dir='ltr'>021-88776655</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Clock className='h-4 w-4 shrink-0'/>
                            <span>8 صبح تا 11 شب</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-xl font-sansBold font-black">شعبه ونک</h3>
                        <span className="rounded-full bg-secondary px-3 py-1 text-[0.9rem] text-secondary-foreground">تهران</span>
                    </div>
                    <div className="space-y-3 text-lg">
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className='mt-0.5 h-4 w-4 shrink-0'/>
                            <span>خیابان ونک نبش کوچه 12</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Phone className='h-4 w-4 shrink-0'/>
                            <span dir='ltr'>021-88776655</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Clock className='h-4 w-4 shrink-0'/>
                            <span>8 صبح تا 11 شب</span>
                        </div>
                    </div>
                </div>
                <div className="rounded-xl bg-white p-6 shadow-md transition-all hover:-translate-y-1 hover:shadow-lg">
                    <div className="mb-4 flex items-start justify-between">
                        <h3 className="text-xl font-sansBold font-black">شعبه ونک</h3>
                        <span className="rounded-full bg-secondary px-3 py-1 text-[0.9rem] text-secondary-foreground">تهران</span>
                    </div>
                    <div className="space-y-3 text-lg">
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <MapPin className='mt-0.5 h-4 w-4 shrink-0'/>
                            <span>خیابان ونک نبش کوچه 12</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Phone className='h-4 w-4 shrink-0'/>
                            <span dir='ltr'>021-88776655</span>
                        </div>
                        <div className="flex items-start gap-2 text-muted-foreground">
                            <Clock className='h-4 w-4 shrink-0'/>
                            <span>8 صبح تا 11 شب</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default BranchItems