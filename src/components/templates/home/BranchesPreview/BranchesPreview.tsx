import { Button } from '@components/UI/Button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const BranchesPreview:React.FC = ()=>{
  return (
    <section className="bg-secondary/50 py-16">
        <div className="container px-8">
            <div className="mb-10 text-center">
                <h2 className="mb-4 text-3xl font-sansBold font-bold">شعب ما در سراسر ایران</h2>
                <p className="text-lg text-muted-foreground">در 18 شهر بزرگ ایران حضور داریم</p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
                <span className="rounded-full bg-primary px-6 py-2 text-sm font-medium font-sansMedium text-primary-foreground">
                    تهران
                </span>
            </div>
            <div className="mt-10 text-center">
                <NavLink to='/Branches'>
                    <Button variant='outline' size='lg'>
                        مشاهده شعب
                        <ArrowLeft className='mr-2 h-5 w-5'/>
                    </Button>
                </NavLink>
            </div>
        </div>
    </section>
  )
}

export default BranchesPreview