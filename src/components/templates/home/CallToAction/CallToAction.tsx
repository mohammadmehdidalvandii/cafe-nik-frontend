import { Button } from '@components/UI/Button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const CallToAction:React.FC = ()=>{
  return (
    <section className="hero py-20">
        <div className="container px-8 text-center">
            <h2 className="mb-6 text-3xl font-bold font-sansBold text-cream md:text-4xl">
                همین الان سفارش خود را ثبت کنید
            </h2>
            <p className="mx-auto mb-8 max-w-xl text-cream/80">
            شعبه و  زمان تحویل دلخواه خود را انتخاب کنید و سفارش را به صورت آنلاین ثبت نمایید.
            </p>
            <NavLink to='/Orders'>
            <Button size='lg' className='font-bold font-sansBold bg-primary text-white hover:bg-primary/70'>
                شروع سفارش 
                <ArrowLeft className='mr-2 h-5 w-5'/>
            </Button>
            </NavLink>
        </div>
    </section>
  )
}
export default CallToAction