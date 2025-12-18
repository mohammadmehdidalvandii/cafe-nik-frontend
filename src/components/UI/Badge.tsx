import * as React from 'react';
import { cva , type VariantProps } from 'class-variance-authority';
import { cn } from '@utils/cn';

const badgeVariants = cva(
    'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-sansBold font-semibold transition-colors  focus:ring-2 focus:outline-none focus:ring-border focus:ring-offset-2e',
    {
        variants:{
            variant:{
                default:"border-transparent bg-primary text-primary-foreground hover:bg:primary/80",
                secondary:"border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
                destructive:"border-transparent bg-danger text-white hover:bg-danger/80",
                outline:"text-muted-foreground"
            },
        },
        defaultVariants:{
            variant:'default',
        }
    }
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>,VariantProps<typeof badgeVariants>{}

const Badge = ({className, variant , ...props}:BadgeProps)=>{
    return <div className={cn(badgeVariants({variant}),className)} {...props}/>
}

// eslint-disable-next-line react-refresh/only-export-components
export {Badge , badgeVariants}