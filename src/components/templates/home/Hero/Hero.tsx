import { Button } from '@components/UI/Button'
import { ArrowLeft } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const Hero:React.FC = ()=> {
  return (
    <section className="relative min-h-[80vh] overflow-hidden">
        <div className="absolute inset-0">
            <img 
                src='/assets/images/hero.png'
                alt='کافی شاپ نیک'
                className='h-full w-full object-cover'
            />
            <div className="absolute inset-0 bg-linear-to-l from-coffee-dark/60 via-coffee-dark/50 to-transparent"></div>
        </div>
        <div className="container px-8 relative flex min-h-[80vh] items-center">
            <div className="max-w-xl animate-fade-in">
                <h1 className="mb-6 text-4xl font-sansBlack font-black leading-tight text-cream md:text-5xl lg:text-6xl">
                    طعم واقعی قهوه
                <span className="mt-2 block text-copper">درکافی شاپ نیک</span>    
                </h1>
                <p className="mb-8 text-xl text-white">
                    با بیش از ۲۵ شعبه در سراسر ایران، بهترین قهوه‌ها را از ما بخواهید. سفارش آنلاین ثبت کنید و در شعبه دلخواه تحویل بگیرید.
                </p>
                <div className="flex flex-wrap gap-4">
                    <NavLink to='/Orders'>
                        <Button size='lg' className='text-xl bg-copper text-white hover:bg-copper/90'>
                            ثبت سفارش
                            <ArrowLeft className='mr-2 h-5 w-5'/>
                        </Button>
                    </NavLink>
                    <NavLink to='/Menu'>
                        <Button 
                        size='lg'
                        variant='outline'
                        className='text-xl border-cream/30 bg-cream/10 text-white hover:bg-cream/20'
                        >
                            مشاهده منو
                        </Button>
                    </NavLink>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Hero