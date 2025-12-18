import { Button } from '@components/UI/Button'
import { ArrowRight, Coffee, Home } from 'lucide-react'
import React from 'react'
import { NavLink } from 'react-router-dom'

const NotFound:React.FC = ()=>{
  return (
    <div className="flex min-h-screen items-center justify-center ">
        <div className="text-center space-y-8">
            {/* Animated coffee Icon */}
            <div className="relative mx-auto">
                <div className='absolute inset-0 animate-ping rounded-full bg-primary/20 h-32 w-32 mx-auto'/>
                <div className="relative flex h-32 w-32 mx-auto items-center justify-center rounded-full bg-primary/10 border-2 border-primary/20">
                    <Coffee className='h-16 w-16 text-primary animate-bounce'/>
                </div>
            </div>
            {/* Error Number */}
            <div className="space-y-2">
                <h1 className="text-8xl font-sansBlack font-black text-primary/80 tracking-tighter">
                    404
                </h1>
                <div className='h-1 w-24 mx-auto bg-linear-to-r from-transparent via-primary to-transparent rounded-full'/>
            </div>
            {/* Message */}
            <div className="space-y4 max-w-md ma-auto">
                <h2 className="text-2xl font-bold font-sansBold text-muted-foreground">صفحه مورد نظر یافت نشد</h2>
                <p className="text-muted-foreground leading-relaxed">
                    به نظر می‌رسد قهوه‌ای که دنبالش هستید اینجا نیست! شاید آدرس اشتباه وارد شده یا صفحه منتقل شده است.
                </p>
            </div>
            {/* Actions */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
                <Button asChild size='lg' className='gap-2 min-w-[180px]'>
                    <NavLink to='/'>
                        <Home className='h-5 w-5'/>
                        بازگشت به خانه
                    </NavLink>
                </Button>
                <Button asChild variant='outline' size='lg' className='gap-2 min-w-[180px]'>
                    <NavLink to='/Menu'>
                        مشاهده منو
                        <ArrowRight className='h-5 w-5'/>
                    </NavLink>
                </Button>
            </div>
            {/* Animations */}
            <div className="flex justify-center gap-2 pt-8">
                {[...Array(4)].map((i)=>(
                    <div
                    key={i}
                    className='h-3 w-3 rounded-full bg-primary/40 animate-pulse'
                    style={{ animationDelay: `${i * 0.2}s` }}
                    />
                ))}
            </div>
        </div>
    </div>
  )
}

export default NotFound