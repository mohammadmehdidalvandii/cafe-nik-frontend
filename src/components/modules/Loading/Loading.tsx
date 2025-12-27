import { Coffee } from 'lucide-react';
import React from 'react';

const Loading:React.FC =()=>{
  return (
    <div className="flex min-h-screen items-center justify-center bg-linear-to-r from-bgk via-bgk to-primary/5">
        <div className="text-center my-8">
            {/* Animated Coffee Cup */}   
            <div className="relative mx-auto">
                {/* Outer ring animation */}
                <div className='absolute inset-0 h-28 w-28 mx-auto rounded-full border-4 border-primary/20 animate-ping'/>
                {/* Middle ring */}
                <div className='absolute inset-2 h-24 w-24 mx-auto rounded-full border-2 border-primary/30 animate-pulse'/>
                {/* Coffee cup */}
                <div className="relative flex h-28 w-28 mx-auto items-center justify-center rounded-full bg-primary/10 border-2 border-primary/40">
                    <Coffee className='h-12 w-12 text-primary animate-bounce'/>
                </div>
                {/* Steam animation */}
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 flex gap-1">
                    {[...Array(3)].map((i)=>(
                        <div
                            key={i}
                            className='w-1.5 bg-liner-to-t from-primary/40 to-transparent rounded-full animate-steam'
                        />
                    ))}
                </div>
                {/* Loading Text */}
                <div className='my-3'>
                    <h2 className="text-xl font-sansBold font-semibold text-primary">
                        در حال بارگذاری ...
                    </h2>
                </div>
                {/* Animated dots */}
                <div className='flex justify-center gap-2 mt-8'>
                    {[...Array(3)].map((i)=>(
                        <div
                            key={i}
                            className='h-3 w-3 rounded-full bg-primary animate-bounce'
                            style={{animationDelay:`${1 * 0.15}s`}}
                        />
                    ))}
                </div>
                {/* Progress bar */}
                <div className="w-64 mx-auto h-1.5 bg-muted rounded-full overflow-hidden mt-8">
                    <div className="h-full bg-linear-to-r from-primary via-primary/80 to-primary rounded-full animate-loading-bar"/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Loading